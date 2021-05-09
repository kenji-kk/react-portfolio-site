import { memo, ReactNode, VFC } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

import './organisms.css'

type Props = {
  children: ReactNode;
  onClickDrawer: () => void;
  iconChangeFlag: boolean;
}

export const Header: VFC<Props> = memo((props) => {
  const { children, onClickDrawer, iconChangeFlag } = props;
  
  return (
    <>
    <div className="headerWrap">
      <p className="headerTitle">{children}</p>
      <button className="HeaderMenuButton" onClick={onClickDrawer}>
        <span className="material-icons-outlined HeaderMenuIcon" >
            {iconChangeFlag ? "menu" : "close"}
        </span>
      </button>
    </div>
    </>
  )
});
