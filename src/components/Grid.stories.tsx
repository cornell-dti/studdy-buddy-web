import React from 'react';

import { Meta } from '@storybook/react';
import { Col, Grid, Props, Row } from './Grid';

import { Story } from './Utilities.stories';

import './Grid.stories.scss';

export default {
    title: 'Components/Grid',
    component: Grid,
    subcomponents: { Col, Row }
} as Meta;

export const Empty: Story<Props> = (args) => <Grid {...args} />;