import { IAxisScale } from './axis-scale';
export declare class ScaleLinear implements IAxisScale {
    /**
     * 作用域
     */
    _domain: number[];
    /**
     * 值域
     */
    _range: number[];
    setDomain(domain: number[]): this;
    domain(): number[];
    setRange(range: number[]): this;
    range(): number[];
    getRangeValue(dValue: number): number | undefined;
    /**
     * 根据dValue的值，找到对应的定义域索引
     * TOO_SMALL_DOMAIN_VALUE 表示 dValue位于domain定义域的下界之外
     * TOO_MAX_DOMAIN_VALUE 表示 dValue位于domain定义域的上界之外
     * @private
     * @param {number} dValue
     * @returns {(number | -1)}
     * @memberof ScaleLinear
     */
    private findDomainIndex;
    /**
     * 检查参数是否有效
     * @private
     */
    private check;
}
