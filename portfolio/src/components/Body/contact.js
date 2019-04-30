//main body, this will change based on page
/*
+---------------------------------------------------------------------+
|                            NAVBAR                                   |
+---------------------------------------------------------------------+
|                                                                     |
||
|                                                                     |
+---------------------------------------------------------------------+
|                            FOOTER                                   |
+---------------------------------------------------------------------+
 
//Landing
//Profile
//ContactForm
//

*/

import React from "react"
import "../App.css"

class Body extends React.Component {
    state = {
        title : "Learning Driven Programmer.",
        speil : "This is for contact information and forms",
    }

    componentDidMount = () =>{
        const newTitle = this.props.onLoad(this.state.title)
        document.getElementById('title').innerHTML = newTitle
    }
    render() {
        return (
        <div className="container">
            <p id="title"></p>
            <p>{this.state.speil}</p>
        </div>
        )}
}

export default Body