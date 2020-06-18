export const menuOptions = [
  { name: 'Services', link: '/services',activeIndex: 1, selectedIndex: 0 },
  { name: 'Custom Software Development', link: '/customservices', activeIndex: 1, selectedIndex: 1 },
  { name: 'Mobile App Development', link: '/mobilesites', activeIndex: 1, selectedIndex: 2 },
  { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 },
];

export const mainRoutes = [
  { name: 'Home', link: '/', activeIndex: 0, selectedIndex: 0 },
  { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
  { name: 'The Revolution', link: '/revolution', activeIndex: 2, selectedIndex: 0 },
  { name: 'About Us', link: '/about', activeIndex: 3, selectedIndex: 0 },
  { name: 'Contact us', link: '/contact', activeIndex: 4, selectedIndex: 0 },
];

export const appRoutes = [...mainRoutes, ...menuOptions];
