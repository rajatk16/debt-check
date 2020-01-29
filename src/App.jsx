import React from 'react';
import {Container} from 'semantic-ui-react'
import {Router} from '@reach/router'

import Header from './components/Header'
import CarDebt from './pages/CarDebt'
import CreditCardDebt from './pages/CreditCardDebt'

const App = () => (
  <Container>
    <Header/>
    <Router>
      <CarDebt path="/" default />
      <CreditCardDebt path="/credit" />
    </Router>
  </Container>
)

export default App;