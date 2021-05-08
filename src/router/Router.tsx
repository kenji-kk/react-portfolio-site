import  { memo, VFC} from 'react';
import { Route, Switch } from 'react-router';

import { About } from '../components/pages/About';
import { Top } from '../components/pages/Top';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route exact path="/">
        <Top/>
      </Route>
      <Route path="/about">
        <HeaderLayout title="ABOUT">
          <About/>
        </HeaderLayout>
      </Route>

    </Switch>
  )
});
