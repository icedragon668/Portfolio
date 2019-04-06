import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"
import "./App.css"

//has a background the extends "behind" the navbar and body, covered by foot?

class App extends React.Component {
    state = {
        location : "landing"
    }

    componentDidMount () {
        let ele = document.getElementsByTagName('body')
        console.log(ele)
        
    }


    render() {
        return (
            <>
                <header className="header">
                    <Navbar {...this.state}/>
                </header>
                <div className="body">
                    <Body {...this.state}/>
                </div>
                <div className="footer">
                    <Footer {...this.state}/>
                </div>
            </>
        )
    }
}

export default App