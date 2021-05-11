import  { memo, VFC} from 'react';
import { Route, Switch } from 'react-router';

import { About } from '../components/pages/About';
import { Skill } from '../components/pages/Skill'
import { Top } from '../components/pages/Top';
import { HeaderLayout } from '../components/templates/HeaderLayout';


export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route exact path="/">
        <Top/>
      </Route>
      <Route path="/about">
        <HeaderLayout title="ABOUT ME" imgClass="headerLayoutImageAbout" >
          <About/>
        </HeaderLayout>
      </Route>
      <Route path="/skill">
        <HeaderLayout title="SKILL" imgClass="headerLayoutImageSkill">
          <Skill/>
        </HeaderLayout>
      </Route>
      <Route path="/portfolio">
        <HeaderLayout title="PORTFOLIO" imgClass="headerLayoutImagePortfolio">
          <Skill/>
        </HeaderLayout>
      </Route>

    </Switch>
  )
});
