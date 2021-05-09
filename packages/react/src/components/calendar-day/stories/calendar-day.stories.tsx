import { Story, Meta } from '@storybook/react';

import { IXCalendarDayProps, XCalendarDay } from './index';

export default {
  title: 'Example/Day-Calendar',
  component: XCalendarDay,
} as Meta<IXCalendarDayProps>;

const Template: Story<IXCalendarDayProps> = args => <XCalendarDay {...args} />;

export const Basic = Template.bind({});
