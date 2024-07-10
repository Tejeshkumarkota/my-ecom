import React from 'react'
import Product from '../../../shared/_ui/Product'
import MasterLayout from '../../../shared/_components/MasterLayout'

export default function Products() {
  return (
    <MasterLayout>
      <h1 className='mb-5'>Products</h1>
      <p>List of products goes here</p>
      <Product />
    </MasterLayout>
  )
}
