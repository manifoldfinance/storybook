import { create } from '@storybook/theming';

// this themes the storybook UI
const manifoldBaseTheme = {
  brandTitle: 'Manifold Design',
  brandUrl: 'https://manifoldfinance.com',
  brandImage: 'https://placehold.it/350x150',
};
export const light = create({
  base: 'light',
  ...manifoldBaseTheme,
});

// export const dark = create({
//   base: 'dark',
//   ...manifoldBaseTheme,
// })
