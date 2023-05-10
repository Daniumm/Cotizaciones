
import type { Meta, StoryObj } from "@storybook/react";
import Input from "components/Input/Input"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    typeText: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'checkbox', 'radio', 'select'],
      },
    },
    multiLine: { control: 'boolean' },
    rows: { control: 'number' },
    fullWidth: { control: 'boolean' },
    select: { control: 'boolean' },
    options: { control: 'array' },
  },

};

export default meta;
type Story = StoryObj<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/**
 * Main Button with using the theme
 */
export const MainInput: Story = {
  args: {
    label : "Input" ,
    typeText : "normal" 
  },
};


/**
 * Password textfield
 */
export const PasswordInput: Story = {
    args: {
        label : "Password",
        typeText : "password" 
    },
  };

/**
 * Multiline
 */
export const MultiLineInput: Story = {
    args: {
        ...MainInput.args,
        multiLine: true,
        rows : 4
      },
  };

/**
 * Full width
 */
export const FullWidthInput: Story = {
    args: {
        ...MainInput.args,
        multiLine: true,
        rows : 4,
        fullWidth :  true
      },
  };


/**
 * Select
 */
export const DropDownInput: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        label : "Select" ,
        typeText : "select" ,
        select : true,
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ],
      },
};

/**
 * CheckBox
 */
export const CheckBoxInput: Story = {
    args: {
        label: 'Checkbox',
        typeText: 'checkbox',
      },
};

/**
 * Radio input
 */
export const RadioInput: Story = {
    
    args: {
        label: 'Radio',
        typeText: 'radio',
        options: [
          { value: 'option1', label: 'Option 1' },
        
        ],
      },
};

/**
 * Card input
 */
export const CardInput: Story = {
    
  args: {
      label: 'Card',
      typeText: 'card',

    },
};


/**
 * Cvv input
 */
export const CvvInput: Story = {
    
  args: {
      label: 'CVV',
      typeText: 'cvv',

    },
};
