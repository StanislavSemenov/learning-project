import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;


// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
