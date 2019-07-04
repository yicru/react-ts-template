import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Index } from '~/components/Index'
import Employees from '~/containers/Employees'

const App: React.FC<void> = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/employees" component={Employees} />
    </div>
  </BrowserRouter>
)

export default App
