import { Icon } from '@lobehub/ui';
import { Tag } from 'antd';
import { Bot, Brain, Cloudy, Info, Mic2, Settings2 } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import type { MenuProps } from '@/components/Menu';
import { SettingsTabs } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

export const useCategory = () => {
  const { t } = useTranslation('setting');
  const { enableWebrtc, showLLM } = useServerConfigStore(featureFlagsSelectors);

  const cateItems: MenuProps['items'] = useMemo(
    () =>
      [
        {
          icon: <Icon icon={Settings2} />,
          key: SettingsTabs.Common,
          label: t('tab.common'),
        },
        showLLM && {
          icon: <Icon icon={Brain} />,
          key: SettingsTabs.LLM,
          label: t('tab.llm'),
        },
        { icon: <Icon icon={Mic2} />, key: SettingsTabs.TTS, label: t('tab.tts') },
        {
          icon: <Icon icon={Bot} />,
          key: SettingsTabs.Agent,
          label: t('tab.agent'),
        },
      ].filter(Boolean) as MenuProps['items'],
    [t, enableWebrtc, showLLM],
  );

  return cateItems;
};
