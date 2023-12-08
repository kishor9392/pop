import {Route, Switch, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
