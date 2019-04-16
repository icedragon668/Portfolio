import React from "react"

const width = window.innerWidth

class LowerBorder extends React.Component {
    state = {}
    
    render() {
        return (
        <div >
            <svg viewBox="0 0 200 400 " height="150" width={width} style={{"margin": 0, "paddingTop":10}}>
                <path className="line" d="
                M-5000 4
                L 0 4
                "
                style={{
                    "stroke":"rgb(60,60,60)",
                    "strokeWidth":6,
                    "fill":"none",
                    "strokeLinecap":"round", "opacity":1 
                }}/>
                <path className="path" d="
                        M0 4 
                        L80 4
                        L120 50
                        L80 100
                        L120 150
                        L100 175"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "strokeWidth":6,
                            "fill":"none",
                            "strokeLinecap":"round" 
                        }}/>
                    <path className="path" d="
                        M120 4 
                        L120 4 
                        L80 50 
                        L120 100 
                        L80 150 
                        L100 175"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "strokeWidth":6,
                            "fill":"none",
                            "strokeLinecap":"round"
                        }}/>
                    <path className="line" d="
                        M 5100 4
                        L 120 4
                        "
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "strokeWidth":6,
                            "fill":"none",
                            "strokeLinecap":"round" 
                        }}/>
            </svg>
        </div>
        )}
}

export default LowerBorder