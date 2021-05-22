/**
 * 定义域 与 值域 之间的f关系
 * y = f(x)
 * @export
 * @interface IScaleInterface
 * @template DomainValue  x的类型
 * @template RangeValue   y的类型
 */
export interface IAxisScale<DomainValue = number> {
    /**
     * 返回定义域的范围
     */
    domain(): DomainValue[];
    /**
     * 返回值域的范围
     */
    range(): number[];
    /**
     * 从dValue计算出对应的值y
     * @param {DomainValue} dValue x的值
     * @returns {(RangeValue | number)}
     * @memberof IScaleInterface
     */
    getRangeValue(dValue: DomainValue): number | undefined;
    /**
     * 针对于category类型的数据，需要知道每个的宽度
     * @example
     *  国家       人口
     *  china      14
     *  anmerican   5
     * 国家数据 为category类型，此时他们会占据一个宽度
     * @param {DomainValue} domain x的值
     */
    getBandWidth?: (domain: DomainValue) => number;
}
