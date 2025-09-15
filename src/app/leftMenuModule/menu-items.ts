export interface MenuItem {
  label: string;
  path: string;
  icon?: string;  // optional, for icons
  children?: MenuItem[]; // optional, for nested menus
}

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  customer: [
    { label: 'Products', path: '/products', icon: 'shopping_cart' },
    { label: 'Orders', path: '/orders', icon: 'list_alt' },
    { label: 'Cart', path: '/cart', icon: 'noto-v1:shopping-cart' },
    { label: 'Profile', path: '/profile', icon: 'person' }
  ],
  dealer: [
    { label: 'Dashboard', path: '/dealer', icon: 'dashboard' },
    { label: 'Manage Orders', path: '/dealer/orders', icon: 'list_alt' },
    { label: 'Products', path: '/dealer/products', icon: 'inventory' },
    { label: 'Profile', path: '/dealer/profile', icon: 'person' }
  ],
  admin: [
    { label: 'Admin Dashboard', path: '/admin', icon: 'dashboard' },
    { label: 'Users', path: '/admin/users', icon: 'group' },
    { label: 'Orders', path: '/admin/orders', icon: 'list_alt' },
    { label: 'Products', path: '/admin/products', icon: 'noto-v1:shopping-cart' }
  ]
};
