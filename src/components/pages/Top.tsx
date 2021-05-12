import { memo,VFC } from 'react';

import './Pages.css';
import { StartButton } from '../atoms/button/StartButton';

export const Top: VFC = memo(() => {
  return(
    <>
    <div className="topBody">
      </div>
      <div className="topWrap">
        <p className="topWelcom">WELCOM</p>
        <p className="topTo">TO</p>
        <p className="topKenji">KENJI'S</p>
        <p className="topPortfolio">PORTFOLIOSITE</p>
        <StartButton />
      </div>
      </>
  )
});
