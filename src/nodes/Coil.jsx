import { useRef, useEffect } from 'react';

export function Coil() {
    const canvas = useRef(null);
    useEffect(() => {
        const ctx = canvas.current.getContext("2d");
        const delta = 10;
        const shift = 0;
        ctx.strokeStyle = "white";
        ctx.moveTo(0+shift, 25);
        ctx.lineTo(10 + delta+shift, 25);
        ctx.moveTo(15 + delta+shift, 33);
        ctx.arc(20 + delta+shift, 25, 10, 2*Math.PI/3, -2*Math.PI/3);
        ctx.moveTo(30 + delta+shift, 16);
        ctx.arc(25 + delta+shift, 25, 10, -Math.PI/3, Math.PI/3);
        ctx.moveTo(35 + delta+shift, 25);
        ctx.lineTo(45 + 2*delta +shift, 25);
        ctx.stroke();
      }, []);

    return <canvas ref={canvas} width='70px' height='50px'></canvas>
}

export default Coil;
