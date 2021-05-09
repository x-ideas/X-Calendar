import * as React from 'react';

interface ICalendarContextValue {
  width: number;
  height: number;
}

/**
 * 上下文
 */
export const CalendarContext = React.createContext<ICalendarContextValue>({
  width: 0,
  height: 0,
});
