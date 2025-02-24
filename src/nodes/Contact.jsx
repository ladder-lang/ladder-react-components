import { useRef, useEffect } from 'react';

export function Contact() {
    const canvas = useRef(null);

    useEffect(() => {
      const ctx = canvas.current.getContext("2d");
      const delta = 10;
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "white";
      ctx.moveTo(0, 25);
      ctx.lineTo(10+delta, 25);
      ctx.moveTo(10+delta, 15);
      ctx.lineTo(10+delta, 35);
      ctx.moveTo(30+delta, 15);
      ctx.lineTo(30+delta, 35);
      ctx.moveTo(30+delta, 25);
      ctx.lineTo(40+2*delta, 25);
      ctx.stroke();
      ctx.closePath();
          ctx.beginPath();
          ctx.globalAlpha = 0.6;
          ctx.strokeStyle = 'rgb(57, 255, 20)';
          ctx.lineWidth = 6;
          ctx.moveTo(0 + delta*0.8, 25);
          ctx.lineTo(9 + delta, 25);
          ctx.moveTo(31 + delta, 25);
          ctx.lineTo(40 + delta*1.2, 25);
          ctx.stroke();
          ctx.closePath();
    }, []);
    return <canvas ref={canvas} width='65px' height='50px'></canvas>;
}

export default Contact;