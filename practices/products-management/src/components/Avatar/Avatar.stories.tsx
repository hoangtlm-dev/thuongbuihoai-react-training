import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar, { AvatarType } from '.';
import { ASSETS } from '../../constants/assets';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const TemplateAvatar: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const AvatarPrimary = TemplateAvatar.bind({});
AvatarPrimary.args = {
  alt: 'This is Arlene wilson',
  src: ASSETS.arleneWilson,
  type: AvatarType.primary
};

export const AvatarSecondary = TemplateAvatar.bind({});
AvatarSecondary.args = {
  alt: 'This is brand IBM',
  src: ASSETS.IBM,
  type: AvatarType.secondary
};
