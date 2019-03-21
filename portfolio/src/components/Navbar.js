//menu
// title
// page name
//???  //working name: thingy
/*
+-----------------------------------------------------------------------------------+
|                                                                                   |
|menuBurger     page                                    myProfile   search/contact/?|
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                                   ANIMATE LOWER BORDER                            |
+-----------------------------------------------------------------------------------+

//Lower Border "dips" into empty space. svg line animation (by steps?? please???)

greyish/ transparent
font styling? //if i can find or make one
loading animation //"navbar" slides down while lower border draws-in (and footer)
menu animation //out and drop
mouseover animation //highlight
border: minimal //not a border so much as a transparent bkg...?

*/

import React from "react"
import Menu from "./Navbar/Menu"
import Thingy from "./Navbar/Thingy"
import LowerBorder from "./Navbar/LowerBorder"

class Navbar extends React.Component {
    state = {}
    render() {
        return (
        <div className=""> {/*navbar-expand-lg sticky-top */}
        <p style={{"text-align":"center"}}> |||</p>
            <nav idName="navBar" style={{"text-align":"center"}}>
                <ul className="navLnk"> {/*  justify-content-center */}
                {/* <li style={{float: "left"}}><Menu /></li> */}
                <li style={{"float":"left"}}><Menu/></li>
                {/* {this.props.location}stateful page name */}
                <li><h4 class="Name">Mitchell "Kori" Simmons</h4></li>
                {/* <li style={{float: "right"}}><Thingy /></li> */}
                <li style={{"float":"right"}}><Thingy /></li>
                </ul>
            </nav>
            <LowerBorder />
        </div>
        )}
}

export default Navbar