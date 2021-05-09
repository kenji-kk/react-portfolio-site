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
  const [ iconChangeFlag, setIconChangeFlag ] = useState<boolean>(true);
  const off = "headerLayoutDrawerOff";
  const on = "headerLayoutDrawerOn";
  const onClickDrawer = () => {
    if (!(drawer === off)){
      setDrawer(off);
      setIconChangeFlag(false);
    } else {
      setDrawer(on);
      setIconChangeFlag(true);
    }
  };
  return (
      <>
        <Header onClickDrawer={ onClickDrawer } iconChangeFlag={ iconChangeFlag }>
          {title}
        </Header>
        <div className={drawer}>
          aaaaaaaaaaaaaa
        </div>
        
        {children}
      </>
  )
});
