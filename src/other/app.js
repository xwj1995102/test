import React from 'react'
import Nav from './nav'
import Banner from './banner'
import Footer from './footer'
function App(props){
    return (
        <div>
           <Nav  link="首页,新闻,信息,介绍,联系"/>
           <Banner />
           <Footer />
       </div>
    )
}
export default App;