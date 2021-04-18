import { ICalendarTime } from './Time';

/**
 * 事件的状态
 */
export enum ECalendarEventStatus {
  /**
   * 确定的
   */
  Confirmed = 'confirmed',
  /**
   * 不确定的
   */
  Tentative = 'tentative',
  /**
   * 取消
   */
  Cancelled = 'cancelled',
}

export enum ECalendarEventType {
  Default = 'deafult',
}

/**
 * 日历事件
 */
export interface ICalendarEvent {
  kind: 'calendar#event';
  /**
   * 事件id
   */
  id: string;
  /**
   * 重复时的id，用于表示同一个重复事件
   */
  recurreId: string;

  /**
   * 事件的类型
   */
  eventType: ECalendarEventType;
  /**
   * 事件的状态
   */
  status: ECalendarEventStatus;
  /**
   * 创建时间戳
   */
  created: number;
  /**
   * 更新时间戳
   */
  updated: number;
  /**
   * 简介
   */
  summary: string;
  /**
   * 详情
   */
  description: string;
  /**
   * 颜色信息
   */
  colorId: string;

  /**
   * 开始时间
   */
  start: ICalendarTime;

  /**
   * 结束时间
   */
  end: ICalendarTime;

  /**
   * 是否是全天事件
   */
  isFullDayEvent: boolean;

  /**
   * 所属的资源id
   */
  resourceId?: string;
  /**
   * 创建的来源
   */
  source: string;
}
