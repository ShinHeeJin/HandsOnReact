import { Meta, StoryFn } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

export default {
  title: "StyledButton",
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "success", "transparent"],
    },
    children: {
      control: { type: "text" },
    },
  },
} as Meta<typeof StyledButton>;

const Template: StoryFn<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const TemplateTest = Template.bind({});

TemplateTest.args = {
  variant: "primary",
  children: "Primary",
};
