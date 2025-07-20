import { Meta, StoryObj } from '@storybook/angular';
import { SearchBarComponent } from './search-bar.component';

const meta: Meta<SearchBarComponent> = {
  title: 'components/SearchBar',
  component: SearchBarComponent,
};
export default meta;

type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {};
