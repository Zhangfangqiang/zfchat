import Page from './index';
import { notFound } from 'next/navigation';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { serverFeatureFlags } from '@/config/server/featureFlags';

export const generateMetadata = async () => {
  const { t } = await translation('setting');
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.llm'),
    url: '/settings/llm',
  });
};

export default () => {
  const showLLM = serverFeatureFlags().showLLM;
  if (!showLLM) return notFound();

  return <Page />;
};
