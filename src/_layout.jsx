import React from 'react'
import { Header } from './components/Navbar.jsx';
import { Footer } from './components/atomic/Footer.jsx';
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