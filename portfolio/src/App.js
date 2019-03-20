import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"

//has a background the extends "behind" the navbar and body, covered by foot?

class App extends React.Component {
    state = {
        location : "landing"
    }

    render() {
        return (
            <>
                <header className="container">
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