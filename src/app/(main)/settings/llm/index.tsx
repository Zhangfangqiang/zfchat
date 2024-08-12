'use client';

import Ollama from './Ollama';
import ZeroOne from './ZeroOne';
import { Flexbox } from 'react-layout-kit';

const Page = () => {
  return (
    <Flexbox gap={24} width={'100%'}>
      <Ollama />
      <ZeroOne />
    </Flexbox>
  );
};

Page.displayName = 'LlmSetting';

export default Page;
