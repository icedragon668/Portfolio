import React from "react"

const width = window.innerWidth

class LowerBorder extends React.Component {
    state = {}
    
    render() {
        return (
        <div >
            <svg viewBox="0 0 200 400 " height="150" width={width} style={{"margin": 0, "padding-top":10}}>
                <path class="line" d="
                M-5000 4
                L 0 4
                "
                style={{
                    "stroke":"rgb(60,60,60)",
                    "stroke-width":6,
                    "fill":"none",
                    "stroke-linecap":"round", "opacity":1 
                }}/>
                <path class="path" d="
                        M0 4 
                        L80 4
                        L120 50
                        L80 100
                        L120 150
                        L100 175"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "stroke-width":6,
                            "fill":"none",
                            "stroke-linecap":"round" 
                        }}/>
                    <path class="path" d="
                        M120 4 
                        L120 4 
                        L80 50 
                        L120 100 
                        L80 150 
                        L100 175"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "stroke-width":6,
                            "fill":"none",
                            "stroke-linecap":"round"
                        }}/>
                    <path class="line" d="
                        M 5100 4
                        L 120 4
                        "
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "stroke-width":6,
                            "fill":"none",
                            "stroke-linecap":"round" 
                        }}/>
            </svg>
        </div>
        )}
}

export default LowerBorder