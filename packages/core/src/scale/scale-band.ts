import { ICloneable } from '../types/clone';
import { IAxisDomain } from './axis-domain';
import { IAxisScale } from './axis-scale';

/**
 * 同d3.scaleBand
 *
 * 连续的条状区域
 *
 * https://devdocs.io/d3~6/d3-scale#_band
 */
export class ScaleBand<VT = IAxisDomain>
  implements IAxisScale<VT>, ICloneable<ScaleBand>
{
  /**
   * 作用域
   */
  _domain: VT[] = [];

  /**
   * 值域
   */
  _range: number[] = [];

  _paddingOuter = 0;

  _paddingInner = 0;

  setDomain(domain: VT[]): this {
    this._domain = domain;
    return this;
  }

  domain(): VT[] {
    return this._domain;
  }

  setRange(range: number[]): this {
    this._range = range;
    return this;
  }

  range(): number[] {
    return this._range;
  }

  getRangeValue(dValue: VT): number | undefined {
    if (this.check()) {
      const index = this._domain.findIndex(val => val === dValue);

      if (index === -1) {
        return undefined;
      }

      // 分段函数
      return this.range()[index];
    }

    return undefined;
  }

  getBandWidth(): number {
    if (this.check()) {
      const num = this.domain().length;

      return this.rangeLength() / num;
    }
    return 0;
  }

  /**
   * @implements {IAxisScale}
   */
  invert(rValue: number): VT {
    // TODO
  }

  /**
   * @implements {ICloneable}
   */
  clone(): ScaleBand {
    const clonedItem = new ScaleBand();

    // TODO: 待实现

    return clonedItem;
  }

  /**
   * 检测配置的有效性
   * @private
   * @returns {boolean}
   * @memberof ScaleBand
   */
  private check(): boolean {
    if (this._range.length !== 2) {
      console.error(new Error('scale-band的值域的长度只支持2'));
      return false;
    }

    if (this._domain.length === 0) {
      console.error(new Error('scale-band的作用域需要设置'));
      return false;
    }

    return true;
  }

  private rangeLength(): number {
    if (this.check()) {
      return this.range()[1] - this.range()[0];
    }

    return 0;
  }
}
