import { memo, ReactNode, useState, VFC } from 'react';

import { Header } from '../organisms/Header'
import './Templates.css'
type Props = {
  children: ReactNode;
  title: string;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children, title } = props;
  const [ drawer, setDrawer ] = useState<string>("headerLayoutDrawerOff");
  const off = "headerLayoutDrawerOff";
  const on = "headerLayoutDrawerOn";
  return (
      <>
        <Header onClickDrawer={() => {
          if (!(drawer == off)){
              setDrawer(off)
            } else {
              setDrawer(on)
            }
          }
          }
        >
          {title}
        </Header>
        <div className={drawer}>
          aaaaaaaaaaaaaa
        </div>
        {children}
      </>
  )
});
