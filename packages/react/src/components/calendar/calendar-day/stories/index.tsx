import React from 'react';
import { XCalendarContainer } from 'components/container';
import { XCalendarContent } from 'components/calendar-elements/content';
import { XDayAxis, YDayAxis } from 'components/calendar-elements/axis/day-axis';
import { ScaleLinear } from '@x-calendar/core';
import { XDayLayout } from 'components/layout';

export interface IXCalendarDayProps {}

export const XCalendarDay: React.FC<IXCalendarDayProps> = props => {
  const linearScale = new ScaleLinear();
  linearScale.setDomain([]).setRange([]);

  return (
    <XCalendarContainer width={400} height={500}>
      <XDayLayout width={400} height={500} xAxisHeight={50} yAxisWidth={100}>
        <XDayLayout.XAxisLayout>
          <XDayAxis axisScale={linearScale}></XDayAxis>
        </XDayLayout.XAxisLayout>
        <XDayLayout.YAxisLayout>
          <YDayAxis axisScale={linearScale}></YDayAxis>
        </XDayLayout.YAxisLayout>
      </XDayLayout>
      {/* 坐标轴 */}

      {/* <XCalendarContent>
      </XCalendarContent> */}
    </XCalendarContainer>
  );
};
