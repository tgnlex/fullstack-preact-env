import React from 'react'
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import './layout.css';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className="container">{children}</main>
    <Footer />
    </>
  )
}

export {Layout}