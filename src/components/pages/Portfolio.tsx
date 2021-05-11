import { memo ,VFC }  from 'react';

import './Pages.css';

export const Portfolio: VFC = memo(() => {
  return (
    <>
    <div className="headerLayoutImagePortfolio"></div>
    <p className="aboutP" style={{height:"300vh"}}>aboutページです</p>
    
    </>
  )
});
