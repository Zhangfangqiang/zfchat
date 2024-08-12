'use client';

import { memo } from 'react';
import { Button } from 'antd';
import { Icon } from '@lobehub/ui';
import { Flexbox } from 'react-layout-kit';
import { useRouter } from 'next/navigation';
import { SendHorizonal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Actions = memo<{ mobile?: boolean }>(({ mobile }) => {
  const router = useRouter();
  const { t } = useTranslation('welcome');

  return (
    <Flexbox gap={16} horizontal={!mobile} justify={'center'} width={'100%'} wrap={'wrap'}>

      <Button
        block={mobile}
        onClick={() => router.push('/chat')}
        size={'large'}
        style={{ minWidth: 160 }}
        type={'primary'}
      >
        <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
          {t('button.start')}
          <Icon icon={SendHorizonal} />
        </Flexbox>
      </Button>
    </Flexbox>
  );
});

export default Actions;
