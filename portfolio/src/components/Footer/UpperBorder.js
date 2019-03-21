import React from "react"

const width = window.innerWidth

class Upperborder extends React.Component {
    state = {}
    render() {
        return (
            <div >
            <svg viewBox="0 0 200 400 " height="150" width={width} style={{"margin": 0, "padding-bottom":10}}>
                <path class="line" d="
                M-5000 396
                L 0 396
                "
                style={{
                    "stroke":"rgb(60,60,60)",
                    "stroke-width":6,
                    "fill":"none",
                    "stroke-linecap":"round" 
                }}/>
                <path class="path" d="
                        M0 396 
                        L80 396
                        L120 350
                        L80 300
                        L120 250
                        L100 225"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "stroke-width":6,
                            "fill":"none",
                            "stroke-linecap":"round" 
                        }}/>
                    <path class="path" d="
                        M120 396 
                        L120 396 
                        L80 350 
                        L120 300 
                        L80 250 
                        L100 225"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "stroke-width":6,
                            "fill":"none",
                            "stroke-linecap":"round"
                        }}/>
                    <path class="line" d="
                        M 5100 396
                        L 120 396
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

export default Upperborder