import { Metadata } from 'next';
import Client from './(loading)/Client';
import Redirect from './(loading)/Redirect';
import { getCanonicalUrl } from '@/const/url';

export const metadata: Metadata = {
  alternates: { canonical: getCanonicalUrl('/') },
};

/**
 * 初始加载界面
 */
const Page = () => {
  return (
    <>
      <Client />
      <Redirect />
    </>
  );
};

Page.displayName = 'Loading';

export default Page;
