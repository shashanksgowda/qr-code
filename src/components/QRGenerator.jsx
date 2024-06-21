import React, { useEffect, useState } from 'react'
import { create, toCanvas } from 'qrcode'

const QRGenerator = ({text}) => {
    const [canvas, setCanvas] = useState();
    useEffect(() => {
        setCanvas(document.getElementById("canvas"));
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