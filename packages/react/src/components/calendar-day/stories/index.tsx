import { XCalendarContainer } from '../../container';
import { XCalendarContent } from '../../content';

export interface IXCalendarDayProps {}

export const XCalendarDay: React.FC<IXCalendarDayProps> = props => {
  return (
    <XCalendarContainer width={400} height={500}>
      <XCalendarContent>
        {/* 坐标轴 */}

        {/* grid */}

        {/* 事件 */}
      </XCalendarContent>
    </XCalendarContainer>
  );
};
