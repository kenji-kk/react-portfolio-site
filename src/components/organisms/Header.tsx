import { memo, ReactNode, useState, VFC } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

import './organisms.css'

type Props = {
  children: ReactNode;
  onClickDrawer: () => void;
}

export const Header: VFC<Props> = memo((props) => {
  const { children, onClickDrawer } = props;
  
  return (
    <>
    <div className="headerWrap">
      <p className="headerTitle">{children}</p>
      <DehazeIcon className="headerDehazeIcon" onClick={onClickDrawer}/>
    </div>
    </>
  )
});
