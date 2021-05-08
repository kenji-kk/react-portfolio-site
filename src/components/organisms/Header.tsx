import { memo, ReactNode, VFC } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

import './organisms.css'

type Props = {
  children: ReactNode;
}

export const Header: VFC<Props> = memo((props) => {
  const { children } = props;
  
  return (
    <div>
      <p>{children}</p>
      <DehazeIcon className="dehazeIcon"/>
    </div>
  )
});
