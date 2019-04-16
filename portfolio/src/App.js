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

    translate = (var1) => {
        let ele = var1
        let e = ''
        if (ele !== undefined) {
        for(let i=0;i<ele.length;i++) {
          e += `<span class="spin">${ele[i]}</span>`
        };
        return e
        } else {
            console.log("empty?")
        }
    }


    render() {
        return (
            <>
                <header className="header">
                    <Navbar {...this.state}/>
                </header>
                <div className="body">
                    <Body {...this.state} onLoad={this.translate}/>
                </div>
                <div className="footer">
                    <Footer {...this.state}/>
                </div>
            </>
        )
    }
}

export default App