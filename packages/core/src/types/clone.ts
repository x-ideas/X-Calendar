export interface ICloneable<T> {
  /**
   * 深拷贝一个对象
   */
  clone: () => T;
}
