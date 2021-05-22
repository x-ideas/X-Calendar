import * as React from 'react';
import { IAxisScale, ICalendarEvent } from '@x-calendar/core';

interface IXCalendarContentProps {
  /**
   * 内容区的宽度
   */
  width: number;
  /**
   * 内容区的高度
   */
  height: number;

  /**
   * x坐标轴的缩放(数据(定义域)->坐标(值域))的映射函数
   */
  xAxisScale: IAxisScale;

  /**
   * y坐标轴的缩放(数据(定义域)->坐标(值域))的映射函数
   */
  yAxisScale: IAxisScale;

  /**
   * 网格的配置
   */
  gridConfig: any;

  /**
   * 日历事件的集合
   */
  events: ICalendarEvent[];
}

/**
 * 日历的内容区，用来定坐标系(relative)
 * @param props
 * @returns
 */
export const XCalendarContent: React.FC<IXCalendarContentProps> = props => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
};
