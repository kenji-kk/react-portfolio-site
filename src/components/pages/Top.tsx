import { memo,VFC } from 'react';
import './Pages.css'

export const Top: VFC = memo(() => {
  return(
    <div className="topBody">
      <div className="topWrap">
        <p className="topWelcom">WELCOM</p>
        <p className="topTo">TO</p>
        <p className="topKenji">KENJI'S</p>
        <p className="topPortfolio">PORTFOLIOSITE</p>
      </div>
    </div>
  )
});
