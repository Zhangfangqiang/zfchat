import Link from 'next/link';
import { memo } from 'react';
import { ActionIcon } from '@lobehub/ui';
import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGlobalStore } from '@/store/global';
import { useSessionStore } from '@/store/session';
import { SidebarTabKey } from '@/store/global/initialState';

export interface TopActionProps {
  tab?: SidebarTabKey;
}

const TopActions = memo<TopActionProps>(({ tab }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);

  return (
    <>
      <Link
        aria-label={t('tab.chat')}
        href={'/chat'}
        onClick={(e) => {
          e.preventDefault();
          switchBackToChat(useSessionStore.getState().activeId);
        }}
      >
        <ActionIcon
          active={tab === SidebarTabKey.Chat}
          icon={MessageSquare}
          placement={'right'}
          size="large"
          title={t('tab.chat')}
        />
      </Link>

    </>
  );
});

export default TopActions;
