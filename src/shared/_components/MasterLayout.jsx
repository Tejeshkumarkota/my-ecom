import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MasterLayout(props) {
  return (
    <div className='pad-5'>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}
