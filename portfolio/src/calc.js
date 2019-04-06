const pi = Math.PI
let R = 2
for (i=1;i<10;i++){
    let rad = (pi/8)
    let y = (i*R)*Math.sin((i*rad)-(8*rad))
    let x = (i*R)*Math.cos((i*rad)-(8*rad))
    console.log(`${x.toFixed(2)}px ${y.toFixed(2)}px 1px #61dafb,`)
}

