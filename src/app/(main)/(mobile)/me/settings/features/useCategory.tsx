import { Bot, Brain, Mic2, Settings2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import urlJoin from 'url-join';

import { CellProps } from '@/components/Cell';
import { SettingsTabs } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

export const useCategory = () => {
  const router = useRouter();
  const { t } = useTranslation('setting');
  const { showLLM } = useServerConfigStore(featureFlagsSelectors);

  const items: CellProps[] = [
    {
      icon: Settings2,
      key: SettingsTabs.Common,
      label: t('tab.common'),
    },
    showLLM && {
      icon: Brain,
      key: SettingsTabs.LLM,
      label: t('tab.llm'),
    },
    { icon: Mic2, key: SettingsTabs.TTS, label: t('tab.tts') },
    {
      icon: Bot,
      key: SettingsTabs.Agent,
      label: t('tab.agent'),
    },
  ].filter(Boolean) as CellProps[];

  return items.map((item) => ({
    ...item,
    onClick: () => router.push(urlJoin('/settings', item.key as SettingsTabs)),
  }));
};
