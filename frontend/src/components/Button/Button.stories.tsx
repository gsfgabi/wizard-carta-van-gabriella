import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button Text',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Story para o botão primário
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

// Story para o botão secundário
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

// Story para um botão desabilitado
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Story para um botão com conteúdo personalizado
export const WithIcon: Story = {
  args: {
    children: (
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Download
      </span>
    ),
  },
};