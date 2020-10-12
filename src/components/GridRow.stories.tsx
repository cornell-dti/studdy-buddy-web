import React from 'react';
import { Meta } from '@storybook/react';
import { Item, AlignProps, Row, Grid, Props } from './Grid';

import { Story } from './Utilities.stories';

export default {
    title: 'Components/Grid/Row',
    component: Row,
    subcomponents: { Item }
} as Meta;

type RowStory<T = {}> = Story<React.PropsWithChildren<T & AlignProps>>;

export const Empty: RowStory = () => <Row></Row>;
Empty.argTypes = {
    align: {
        defaultValue: undefined,
        control: {
            type: 'select',
            options: {
                'None': undefined,
                'Center': 'center'
            }
        }
    }
};

export const WithContainer: Story<Props> = (args) => (
    <Grid {...args}>
        <Row>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </Row>
    </Grid>
);

export const WithoutContainer: RowStory = (args) => (
    <Row {...args}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
    </Row>
);
WithContainer.argTypes = { ...Empty.argTypes };

export const Fill: RowStory = (args) => (
    <Row {...args}>
        <Item fill={true}>1</Item>
        <Item fill={true}>2</Item>
        <Item fill={true}>3</Item>
    </Row>
);
Fill.argTypes = { ...Empty.argTypes };

export const Grow: RowStory<{
    growChild: '1' | '2' | '3'
}> = ({ growChild, ...args }) => (
    <Row {...args}>
        <Item grow={growChild === '1'}>Child 1</Item>
        <Item grow={growChild === '2'}>Child 2</Item>
        <Item grow={growChild === '3'}>Child 3</Item>
    </Row>
);
Grow.args = {
    growChild: '1',
};
Grow.argTypes = {
    ...Empty.argTypes,
    growChild: {
        name: 'Grow Child',
        description: 'Which child to grow. (convenience for storybook)',
        defaultValue: '1',
        control: {
            type: 'inline-radio',
            options: {
                'Child 1': '1',
                'Child 2': '2',
                'Child 3': '3'
            },
        }
    }
};
