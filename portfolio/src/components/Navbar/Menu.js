import React from "react"

class Menu extends React.Component {
    state = {}
    render() {
        return (
        <div className="container">
                
                    <option><a href="index.html">Profile</a></option>
                    <option><a href="portfolio.html">Portfolio</a></option>
                    <option><a href="contact.html">Contact</a></option>
                
        </div>
        )}
}

export default Menu