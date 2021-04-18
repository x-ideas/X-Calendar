/**
 * 资源信息
 *
 * 如人，组织等
 */
export interface ICalendarResource {
  id: string;
  /**
   * 父资源的id
   */
  parentId?: string;

  name: string;
}
