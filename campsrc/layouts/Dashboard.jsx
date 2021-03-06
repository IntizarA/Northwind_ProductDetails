import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetails from '../pages/CartDetails'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        {/* grid setir ve sutunlardan istifade ederek columnlari yan yana getirmek uchun istifade edilir sematic ui de 16 beraber hisseye bolerek ishleri gorur */}
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetails} />
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}
