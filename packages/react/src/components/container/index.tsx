import * as React from 'react';
import { CalendarContext } from '../context';

interface IXCalendarContainerProps {
  width: number | string;
  height: number | string;
}

/**
 * 日历的容器，用来确定尺寸
 * @param props
 * @returns
 */
export const XCalendarContainer: React.FC<IXCalendarContainerProps> = props => {
  const divRef = React.useRef<HTMLDivElement>(null);
  // 计算尺寸
  const rect = divRef.current?.getBoundingClientRect();

  // TODO: 监听size变化

  return (
    <div
      ref={divRef}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <CalendarContext.Provider
        value={{
          width: rect?.width ?? 0,
          height: rect?.height ?? 0,
        }}
      >
        {props.children}
      </CalendarContext.Provider>
    </div>
  );
};
