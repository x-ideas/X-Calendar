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
   * @returns {DomainValue[]} 定义域
   */
  domain(): DomainValue[];

  /**
   * 返回值域的范围
   * @returns {number[]} 值域
   */
  range(): number[];

  /**
   * 从dValue计算出对应的值y
   *
   * 当dValue不在定义域内时，表现受clamp设置的影响
   * @param {DomainValue} dValue x的值
   * @returns {(RangeValue | number)}
   * @memberof IScaleInterface
   * @throws {Error} 如果dValue不在定义域内，则抛出错误
   */
  getRangeValue(dValue: DomainValue): number | undefined;

  /**
   * 由y计算出对应的值x
   * @param {number} rValue y的值
   * @returns {DomainValue} 对应的x的值
   * @throws {Error} 如果rValue不在值域内，则抛出错误
   */
  invert(rValue: number): DomainValue;

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

  /**
   * 设置作用域是否就在设置的domain之间。
   * @description 作用域为[0, 1]
   * 当clamp为true时，假如在调用getRangeValue的时候传入了1.5, 返回的值
   * @param {boolean} isClamp
   * @memberof IAxisScale
   */
  clamp(isClamp: boolean): void;

  /**
   * 查询clamp的状态
   * @returns {boolean}
   * @memberof IAxisScale
   */
  isClamp(): boolean;
}
