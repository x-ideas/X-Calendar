import { XCalendarContainer } from '../../container';
import { XCalendarContent } from '../../content';

export interface IXCalendarDayProps {}

export const XCalendarDay: React.FC<IXCalendarDayProps> = props => {
  return (
    <XCalendarContainer width={400} height={500}>
      <XCalendarContent></XCalendarContent>
    </XCalendarContainer>
  );
};
