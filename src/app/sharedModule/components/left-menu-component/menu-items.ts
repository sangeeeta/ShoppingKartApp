export interface MenuItem {
  label: string;
  path: string;
  icon?: string;  // optional, for icons
  children?: MenuItem[]; // optional, for nested menus
}

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  admin: [
    { label: 'Dashboard', path: '/admin', icon: 'noto-v1:japanese-post-office' },
    { label: 'user-management', path: '/admin/user-management', icon: 'noto-v1:man-mechanic' },
    { label: 'product - management', path: '/admin/product-management', icon: 'noto-v1:package' },
    
  ],
  customer: [
    { label: 'Dashboard', path: '/products', icon: 'noto-v1:japanese-post-office' },
    { label: 'Products', path: '/products', icon: 'shopping_cart' },
    { label: 'Cart', path: '/orders', icon: 'noto-v1:shopping-cart' },
    { label: 'Orders', path: '/cart', icon: 'noto-v1:shopping-cart' },
    { label: 'Wishlist ', path: '/profile', icon: 'person' },
    { label: 'Profile ', path: '/profile', icon: 'person' },
    { label: 'Support/Help ', path: '/profile', icon: 'person' }
  ],
  dealer: [
    { label: 'Dashboard', path: '/dealer', icon: 'noto-v1:japanese-post-office' },
    { label: 'Products', path: '/dealer/products', icon: 'noto-v1:sushi' },
  ]
};
