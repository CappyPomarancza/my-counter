import React, { Component } from 'react'
import Counter from './views/Counter';


const App = () => (
  <div>
    <Router> 
      <div>
        <Route path={'/counter'} component={()=> <Counter number = {0}/>} />
      </div>
    </Router>
  </div>
)

export default App
