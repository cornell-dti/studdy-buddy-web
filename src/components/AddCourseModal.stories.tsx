import React from 'react';
import { Meta } from '@storybook/react';
import AddCourseModal, { Props } from './AddCourseModal';

import { Story } from './Utilities.stories';

export default {
    title: 'UI/AddCourseModal',
    component: AddCourseModal,
    args: {
        open: true
    },
    argTypes: { onClose: { action: 'closed' } },
} as Meta;

export const Template: Story<Props> = ({ ...args }) => {
    return <AddCourseModal {...args} />
}
