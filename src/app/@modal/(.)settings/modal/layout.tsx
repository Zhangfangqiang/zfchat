'use client';

import { Skeleton } from 'antd';
import dynamic from 'next/dynamic';
import { PropsWithChildren, memo } from 'react';

import SettingModalLayout from '../../_layout/SettingModalLayout';

const CategoryContent = dynamic(
  () => import('@/app/(main)/settings/@category/features/CategoryContent'),
  { loading: () => <Skeleton paragraph={{ rows: 6 }} title={false} />, ssr: false },
);

const Layout = memo<PropsWithChildren>(({ children }) => {
  return (
    <SettingModalLayout
      category={
        <>
          <CategoryContent modal />
        </>
      }
    >
      {children}
    </SettingModalLayout>
  );
});

export default Layout;
