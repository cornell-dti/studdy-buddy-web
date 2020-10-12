import React from 'react';
import { Meta } from '@storybook/react';
import { Item, AlignProps, Props, Col, Grid } from './Grid';

import { Story } from './Utilities.stories';

export default {
    title: 'Components/Grid/Col',
    component: Col,
    subcomponents: { Item }
} as Meta;

type ColStory<T = {}> = Story<React.PropsWithChildren<T & AlignProps>>;

export const Empty: ColStory = () => <Col></Col>;
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
        <Col>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </Col>
    </Grid>
);

export const WithoutContainer: ColStory = (args) => (
    <Col {...args}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
    </Col>
);
WithContainer.argTypes = { ...Empty.argTypes };

export const Fill: ColStory = (args) => (
    <Col {...args}>
        <Item fill={true}>1</Item>
        <Item fill={true}>2</Item>
        <Item fill={true}>3</Item>
    </Col>
);
Fill.argTypes = { ...Empty.argTypes };

export const Grow: ColStory<{
    growChild: '1' | '2' | '3'
}> = ({ growChild, ...args }) => (
    <div style={{ height: '200px' }}>
        <Col className="h-100" {...args}>
            <Item grow={growChild === '1'}>Child 1</Item>
            <Item grow={growChild === '2'}>Child 2</Item>
            <Item grow={growChild === '3'}>Child 3</Item>
        </Col>
    </div>
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
