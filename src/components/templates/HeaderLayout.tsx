import { memo, ReactNode, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../organisms/Header'
import './Templates.css'
type Props = {
  children: ReactNode;
  title: string;
  imgClass: string;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children, title, imgClass } = props;
  const [ drawer, setDrawer ] = useState<string>("headerLayoutDrawerFirst");
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
        <div className={imgClass}>
        </div>
        <Header onClickDrawer={ onClickDrawer } iconChangeFlag={ iconChangeFlag }>
          {title}
        </Header>
        <div className="headerLayoutDummy"></div>
        
        <div className={drawer}>
           <nav>
            <li><Link to="/" onClick={ onClickLink } className="headerLayoutLink headerLayoutTop">Top</Link></li>
            <li><Link to="/about" onClick={ onClickLink } className="headerLayoutLink headerLayoutAbout">About me</Link></li>
            <li><Link to="/skill" onClick={ onClickLink } className="headerLayoutLink headerLayoutSkill">Skill</Link></li>
            <li><Link to="/portfolio" onClick={ onClickLink } className="headerLayoutLink headerLayoutPortfolio">Portfolio</Link></li>
          </nav>
        </div>
        <div className="headerLayouRelative">
        {children}
        </div>
      </>
  )
});
