export interface MenuItem {
  label: string;
  path: string;
  icon?: string;  // optional, for icons
  children?: MenuItem[]; // optional, for nested menus
}

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  admin: [
    { label: 'Dashboard', path: '/admin', icon: 'noto-v1:shopping-cart' },
    { label: 'Users Management', path: '/user/usersManagement', icon: 'group' },
    { label: 'Dealers Management', path: '/admin/orders', icon: 'list_alt' },
    { label: 'Products Management', path: '/admin/products', icon: 'noto-v1:shopping-cart' },
    { label: 'Orders Management', path: '/admin/products', icon: 'noto-v1:shopping-cart' },
    { label: 'Reports / Analytics ', path: '/admin/products', icon: 'noto-v1:shopping-cart' },
    { label: 'Settings', path: '/admin/products', icon: 'noto-v1:shopping-cart' }
  ],
  customer: [
    { label: 'Dashboard', path: '/products', icon: 'shopping_cart' },
    { label: 'Products', path: '/products', icon: 'shopping_cart' },
    { label: 'Cart', path: '/orders', icon: 'list_alt' },
    { label: 'Orders', path: '/cart', icon: 'noto-v1:shopping-cart' },
    { label: 'Wishlist ', path: '/profile', icon: 'person' },
    { label: 'Profile ', path: '/profile', icon: 'person' },
    { label: 'Support/Help ', path: '/profile', icon: 'person' }
  ],
  dealer: [
    { label: 'Dashboard', path: '/dealer', icon: 'dashboard' },
    { label: 'Products', path: '/dealer/products', icon: 'inventory' },
    { label: 'Orders', path: '/dealer/products', icon: 'inventory' },
    { label: 'Inventory / Stock', path: '/dealer/products', icon: 'inventory' },
    { label: 'Payments', path: '/dealer/orders', icon: 'list_alt' },
    { label: 'Profile/Store Settings', path: '/dealer/profile', icon: 'person' }
  ]
};
