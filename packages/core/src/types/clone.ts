/**
 * 深拷贝接口
 */
export interface ICloneable<T> {
  /**
   * 深拷贝一个对象
   */
  clone: () => T;
}
