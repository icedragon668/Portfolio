import React from "react"

const width = window.innerWidth

class Upperborder extends React.Component {
    state = {}
    render() {
        return (
            <div >
            <svg viewBox="0 0 200 400 " height="150" width={width} style={{"margin": 0, "paddingBottom":10}}>
                <path className="line" d="
                M-5000 396
                L 0 396
                "
                style={{
                    "stroke":"rgb(60,60,60)",
                    "strokeWidth":6,
                    "fill":"none",
                    "strokeLinecap":"round" 
                }}/>
                <path className="path" d="
                        M0 396 
                        L80 396
                        L120 350
                        L80 300
                        L120 250
                        L100 225"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "strokeWidth":6,
                            "fill":"none",
                            "strokeLinecap":"round" 
                        }}/>
                    <path className="path" d="
                        M120 396 
                        L120 396 
                        L80 350 
                        L120 300 
                        L80 250 
                        L100 225"
                        style={{
                            "stroke":"rgb(60,60,60)",
                            "strokeLidth":6,
                            "fill":"none",
                            "strokeLinecap":"round"
                        }}/>
                    <path className="line" d="
                        M 5100 396
                        L 120 396
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

export default Upperborder