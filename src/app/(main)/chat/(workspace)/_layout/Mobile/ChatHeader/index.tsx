'use client';

import { memo, useState } from 'react';
import { MobileNavBar } from '@lobehub/ui';
import ChatHeaderTitle from './ChatHeaderTitle';
import { useQueryRoute } from '@/hooks/useQueryRoute';
import SettingButton from '../../../features/SettingButton';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useInitAgentConfig } from '@/app/(main)/chat/(workspace)/_layout/useInitAgentConfig';


const MobileHeader = memo(() => {
  const router = useQueryRoute();
  const [open, setOpen] = useState(false);

  const { isAgentEditable } = useServerConfigStore(featureFlagsSelectors);
  useInitAgentConfig();

  return (
    <MobileNavBar
      center={<ChatHeaderTitle />}
      onBackClick={() => router.push('/chat', { query: { session: '' }, replace: true })}
      right={
        <>
          {isAgentEditable && <SettingButton mobile />}
        </>
      }
      showBackButton
      style={{ width: '100%' }}
    />
  );
});

export default MobileHeader;
