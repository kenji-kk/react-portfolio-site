import  { memo, VFC} from 'react';
import { Route, Switch } from 'react-router';

import { Top } from '../components/pages/Top';

export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route exact path="/">
        <Top/>
      </Route>
    </Switch>
  )
});
