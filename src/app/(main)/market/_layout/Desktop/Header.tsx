'use client';

import { ChatHeader, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  // <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} />

  return (
    <ChatHeader
      left={
      <div></div>
    }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
