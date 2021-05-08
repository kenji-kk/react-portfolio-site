import { memo, ReactNode, VFC } from 'react';

import { Header } from '../organisms/Header'

type Props = {
  children: ReactNode;
  title: string;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children, title } = props;
  return (
      <>
        <Header>
          {title}
        </Header>
        {children}
      </>
  )
});
