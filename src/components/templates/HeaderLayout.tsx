import { memo, ReactNode, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

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
    if (( drawer === on )){
      setDrawer(off);
      setIconChangeFlag(!iconChangeFlag);
    } else {
      setDrawer(on);
      setIconChangeFlag(!iconChangeFlag);
    }
  };
  const onClickLink = () => {
    setDrawer(off);
    setIconChangeFlag(!iconChangeFlag);
  };
  return (
      <>
        <Header onClickDrawer={ onClickDrawer } iconChangeFlag={ iconChangeFlag }>
          {title}
        </Header>
        <div className={drawer}>
          <Link to="/skill" onClick={ onClickLink }>スキル</Link>
        </div>
        
        {children}
      </>
  )
});
