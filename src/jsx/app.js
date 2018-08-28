import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Banner from './banner'
import Section from './section'
function App(props){
    return(
        <div>
            <Nav link="首页,新闻,信息,介绍,联系"/>
            <Banner />
            <Section />
            <Footer />
        </div>
    )
}
export default App;