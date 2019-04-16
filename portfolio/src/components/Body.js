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

    componentWillMount() {
        console.log( this.props.onLoad(this.state.title))
        // this.setState({title : this.props.onLoad(this.state.title)}, {speil : this.props.onLoad(this.state.speil)})
    }

    render() {
        return (
        <div className="container">
            <p>{this.state.title}</p>
            <p>{this.state.speil}</p>
        </div>
        )}
}

export default Body