import React, { useEffect, useState } from 'react'
import { toCanvas } from 'qrcode'

interface IProps {
    text: string
}
function QRGenerator ({text}: IProps)  {
    const [canvas, setCanvas] = useState<HTMLElement | null>();
    useEffect(() => {
        if (document.getElementById("canvas")) {
            setCanvas(document.getElementById("canvas"));
        }
        
    }, [])
    useEffect(() => {
        console.log('canvas', text)

        if (canvas) {
            toCanvas(canvas, text, () => {
                console.log('error occured. try again!')
            })
        }
    }, [canvas, text])

    return (
        <div>
            <h4>Your QR is below:</h4>
            <br />
            <canvas id="canvas" >
            </canvas>
        </div>
    )
}

export default QRGenerator;