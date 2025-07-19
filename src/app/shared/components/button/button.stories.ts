import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'components/button',
  component: ButtonComponent,
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    text: 'Clique Aqui',
    outline: false,
  },
};

export const Outline: Story = {
  args: {
    text: 'Clique Aqui',
    outline: true,
  },
};
