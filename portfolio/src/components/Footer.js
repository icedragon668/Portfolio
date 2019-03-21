//links
//copyrite
//contact
/*
+-----------------------------------------------------------------------------------+
|                               ANIMATE UPPER BORDER                                |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  links                           copyright                               contact  |
|                                                                                   |
+-----------------------------------------------------------------------------------+

//upper Border "dips" into empty space. svg line animation (by steps?? please???)

greyish/ transparent? maybe opaque
font styling? //if i can find or make one
loading animation //"footer" slides up while upper border draws-in (and header)
border: minimal //not a border so much as a transparent bkg...?

*/

import React from "react"
import Links from "./Footer/Links"
import Copyright from "./Footer/Copyright"
import Contact from "./Footer/ContactLink"
import UpperBorder from "./Footer/UpperBorder"

class Footer extends React.Component {
    state = {}
    render() {
    return (
        <div>
            <UpperBorder />
            <nav style={{"text-align":"center"}}>
                <li style={{"float":"left"}}><Links /></li>
                <li><Copyright /></li>
                <li style={{"float":"right"}}><Contact /></li>
            </nav>
        </div>
    )}
}

export default Footer