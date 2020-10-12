import React from 'react';
import { Meta } from '@storybook/react';
import Loading, { Props } from './Loading';

import { Story } from './Utilities.stories';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

export const Template: Story<Props & {
  text: string;
}> = ({ text = 'Loading', ...args }) => {
  return <Loading {...args}>{text}</Loading>
}
