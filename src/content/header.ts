import { IHeaderNavigation } from 'types/form';

export const headerNavigation: IHeaderNavigation[] = [
  { name: 'About me', link: '#about' },
  { name: 'Relationships', link: '#registration' },
  { name: 'Requirements', link: '#registration' },
  { name: 'Users', link: '#users' },
  { name: 'Sign Up', link: '#registration' },
];

export const headerMobileNavigation: IHeaderNavigation[][] = [
  [
    { name: 'About me', link: '#about' },
    { name: 'Relationship', link: '#registration' },
    { name: 'Users', link: '#users' },
    { name: 'Sign up', link: '#registration' },
    { name: 'Terms and Conditions', link: '#registration' },
  ],
  [
    { name: 'How it works', link: '#registration' },
    { name: 'Partnership', link: '#registration' },
    { name: 'Help', link: '#registration' },
    { name: 'Level testimonial', link: '#registration' },
    { name: 'Contact us', link: '#registration' },
  ],
  [
    { name: 'Articles', link: '#registration' },
    { name: 'Our news', link: '#registration' },
    { name: 'Testimonials', link: '#registration' },
    { name: 'Licenses', link: '#registration' },
    { name: 'Privacy Policy', link: '#registration' },
  ],
];
