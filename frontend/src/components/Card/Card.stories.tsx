import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the card',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Story básico para o Card
export const Basic: Story = {
  args: {
    children: 'Conteúdo básico do card',
  },
};

// Card com conteúdo complexo
export const WithComplexContent: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Título do Card</h2>
        <p className="text-gray-600">
          Este é um exemplo de card com conteúdo mais complexo, incluindo múltiplos elementos filhos.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Ação
        </button>
      </div>
    ),
  },
};

// Card com classes personalizadas
export const WithCustomClasses: Story = {
  args: {
    className: 'bg-gray-100 border border-gray-200',
    children: 'Card com classes personalizadas para background e borda',
  },
};

// Card com largura máxima diferente
export const NarrowCard: Story = {
  args: {
    className: 'max-w-md',
    children: 'Card mais estreito (max-w-md)',
  },
};

// Card sem padding
export const NoPadding: Story = {
  args: {
    className: 'p-0',
    children: (
      <div>
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Cabeçalho</h3>
        </div>
        <div className="p-4">
          <p>Conteúdo do card sem padding padrão</p>
        </div>
      </div>
    ),
  },
};