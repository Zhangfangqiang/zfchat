import Hero from './features/Hero';
import {ldModule} from '@/server/ld';
import Actions from './features/Actions';
import {metadataModule} from '@/server/metadata';
import {translation} from '@/server/translation';
import {isMobileDevice} from '@/utils/responsive';
import StructuredData from '@/components/StructuredData';

export const generateMetadata = async () => {
  const { t } = await translation('metadata');
  return metadataModule.generate({
    description: t('welcome.description'),
    title: t('welcome.title'),
    url: '/welcome',
  });
};

const Page = async () => {
  const mobile = isMobileDevice();
  const { t } = await translation('metadata');
  const ld = ldModule.generate({
    description: t('welcome.description'),
    title: t('welcome.title'),
    url: '/welcome',
  });

  return (
    <>
      <StructuredData ld={ld} />
      <Hero />
      <Actions mobile={mobile} />
    </>
  );
};

Page.displayName = 'Welcome';

export default Page;
