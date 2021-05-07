import { memo, useCallback, VFC} from 'react';
import { useHistory } from 'react-router';

import './Button.css';

export const StartButton: VFC = memo(() => {
  const history = useHistory();
  
  const onClickabout = useCallback(() => history.push("/about"),[history]);
  
  return(
    <button className="startButton" onClick={ onClickabout}>このサイトを探索する</button>
  )
});
