import React from "react"

class Menu extends React.Component {
    state = {}
    render() {
        return (
        <div className="container">
                {/* convert to react router */}
                <a href="index.html"><option>Profile</option></a>
                    <a href="portfolio.html"><option>Portfolio</option></a>
                    <a href="contact.html"><option>Contact</option></a>
                
        </div>
        )}
}

export default Menu