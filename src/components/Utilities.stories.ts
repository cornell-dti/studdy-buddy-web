import { Story as SBStory } from "@storybook/react";

export interface Story<T> extends SBStory<T> {
    bind(_: {}): Story<T>;
}