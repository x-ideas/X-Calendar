/*
 * @Author: 向家祥(xjiaxiang_86@163.com)
 * @description:
 *  在domain和range之间线性缩放
 * @filename: linear-scale.ts
 * Created on Sun Apr 18 2021
 * Copyright (c) 2021 PuPu Tech
 */
import lodash from 'lodash-es';
import { IAxisScale } from './axis-scale';

/**
 * 过小值
 */
const TOO_SMALL_DOMAIN_VALUE = -1;
type TOO_SMALL_DOMAIN_VALUE_TYPE = typeof TOO_SMALL_DOMAIN_VALUE;

/**
 * 过大值
 */
const TOO_MAX_DOMAIN_VALUE = -2;
type TOO_MAX_DOMAIN_VALUE_TYPE = typeof TOO_MAX_DOMAIN_VALUE;

/**
 * @implements {IAxisScale}
 */
export class ScaleLinear implements IAxisScale {
  /**
   * 作用域
   */
  _domain: number[] = [];

  /**
   * 值域
   */
  _range: number[] = [];

  setDomain(domain: number[]): this {
    this._domain = domain;
    return this;
  }

  domain(): number[] {
    return this._domain;
  }

  setRange(range: number[]): this {
    this._range = range;
    return this;
  }

  range(): number[] {
    return this._range;
  }

  getRangeValue(dValue: number): number | undefined {
    if (this.check()) {
      // 找到domain区间

      const index = this.findDomainIndex(dValue);
      if (index === TOO_MAX_DOMAIN_VALUE) {
        return undefined;
      }

      if (index === TOO_SMALL_DOMAIN_VALUE) {
        return undefined;
      }

      // 一次线性函数
      const yStart = this.range()[index];
      const yEnd = this.range()[index + 1];

      const xStart = this.domain()[index];
      const xEnd = this.domain()[index + 1];

      const k = (yEnd - yStart) / (xEnd - xStart);

      return xStart + k * (dValue - xStart);
    }
    return undefined;
  }

  /**
   * 根据dValue的值，找到对应的定义域索引
   * TOO_SMALL_DOMAIN_VALUE 表示 dValue位于domain定义域的下界之外
   * TOO_MAX_DOMAIN_VALUE 表示 dValue位于domain定义域的上界之外
   * @private
   * @param {number} dValue
   * @returns {(number | -1)}
   * @memberof ScaleLinear
   */
  private findDomainIndex(
    dValue: number
  ): number | TOO_SMALL_DOMAIN_VALUE_TYPE | TOO_MAX_DOMAIN_VALUE_TYPE {
    if (dValue > lodash.last(this.domain())) {
      return TOO_MAX_DOMAIN_VALUE;
    }

    if (dValue < lodash.head(this.domain())) {
      return TOO_SMALL_DOMAIN_VALUE;
    }

    return this.domain().findIndex((val, index, arr) => {
      const nextVal = arr[index + 1];
      if (val <= dValue && dValue <= nextVal) {
        return true;
      }

      return false;
    });
  }

  /**
   * 检查参数是否有效
   * @private
   */
  private check(): boolean {
    if (this._domain.length === 0) {
      console.error(new Error('当前domain尚未被设置'));
      return false;
    }

    if (this._range.length === 0) {
      console.error(new Error('当前range尚未被设置'));
      return false;
    }

    if (this._domain.length !== this._range.length) {
      console.error(new Error('scale-linear的domain与range的长度不匹配'));
      return false;
    }

    return true;
  }
}
