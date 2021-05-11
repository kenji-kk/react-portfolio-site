import  { memo, VFC} from 'react';
import { Route, Switch } from 'react-router';

import { About } from '../components/pages/About';
import { Skill } from '../components/pages/Skill';
import { Portfolio } from '../components/pages/Portfolio';
import { Top } from '../components/pages/Top';
import { HeaderLayout } from '../components/templates/HeaderLayout';


export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route exact path="/">
        <Top/>
      </Route>
      <Route path="/about">
        <HeaderLayout title="ABOUT ME" >
          <About/>
        </HeaderLayout>
      </Route>
      <Route path="/skill">
        <HeaderLayout title="SKILL">
          <Skill/>
        </HeaderLayout>
      </Route>
      <Route path="/portfolio">
        <HeaderLayout title="PORTFOLIO" >
          <Portfolio/>
        </HeaderLayout>
      </Route>

    </Switch>
  )
});
