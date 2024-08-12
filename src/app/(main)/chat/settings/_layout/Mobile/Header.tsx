'use client';

import { MobileNavBar, MobileNavBarTitle } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useQueryRoute } from '@/hooks/useQueryRoute';
import { mobileHeaderSticky } from '@/styles/mobileHeader';


const Header = memo(() => {
  const { t } = useTranslation('setting');
  const router = useQueryRoute();

  return (
    <MobileNavBar
      center={<MobileNavBarTitle title={t('header.session')} />}
      onBackClick={() => router.push('/chat')}
      showBackButton
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
