import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';

const meta: Meta<HeaderComponent> = {
  title: 'components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
