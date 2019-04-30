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
        speil : "I am a lifelong learner, motivated to learn new technology, languages, and even workplace paradigms. Strengths include JS, Express, Node, React, and SVG with an inclination towards animation. I have a passion for game design and development. With previous experience in team management and as an EMT, I have developed an ability to work in fast-paced environments while effectively managing priorities.",
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