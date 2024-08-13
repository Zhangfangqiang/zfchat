'use client';

import { memo } from 'react';
import Avatar from './Avatar';
import TopActions from './TopActions';
import { SideNav } from '@lobehub/ui';
import { useActiveTabKey } from '@/hooks/useActiveTabKey';


const Nav = memo(() => {
  const sidebarKey = useActiveTabKey();
  return (
    <SideNav
      avatar={<Avatar />}
      bottomActions={<div></div>}
      style={{ height: '100%', zIndex: 100 }}
      topActions={<TopActions tab={sidebarKey} />}
    />
  );
});

Nav.displayName = 'DesktopNav';

export default Nav;
