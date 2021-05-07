import { memo, VFC} from 'react';
import './Button.css';

export const StartButton: VFC = memo(() => {
  return(
    <button className="startButton">このサイトを探索する</button>
  )
});
