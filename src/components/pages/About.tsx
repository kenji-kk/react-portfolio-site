import { memo ,VFC }  from 'react';

import './Pages.css';

export const About: VFC = memo(() => {
  return (
    <>
    <div className="headerLayoutImageAbout"></div>
    <p className="aboutP" style={{height:"300vh"}}>aboutページです</p>
    
    </>
  )
});
