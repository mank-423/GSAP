import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from "gsap";

const App = () => {

  // const container = useRef();

  // const gsapBoxRef = useRef();
  // const gsapCircleRef = useRef();

  // useGSAP(() => {
  //   gsap.from(".box", {
  //     rotate: 360,
  //     scale: 0,
  //     duration: 1,
  //     opacity: 0,
  //     delay: 0.5,
  //   })
  // }, { scope: container })

  const [circle, setCircle] = useState(0);
  const {contextSafe} = useGSAP(); // This helps in better memory management

  const handleClick = () => {
    const random = gsap.utils.random(-500, 500, 100);
    setCircle(random)
    rotateCircle();
  }

  // useGSAP(()=>{
  //   gsap.to(".circle", {
  //     rotate: 360,
  //     x: circle,
  //     duration: 1,
  //   })
  // }, {scope: 'main', dependencies: [circle]});

  const rotateCircle = contextSafe(()=>{
    gsap.to(".circle", {
      rotate: 360,
      x: circle,
      duration: 1,
    })
  }, {scope: 'main', dependencies: [circle]});

  return (
    <main>
      {/* <div ref={gsapRef} id="box"></div> */}

      {/* <div ref={container} className="container1">
        <div ref={gsapCircleRef} className="circle"></div>
        <div ref={gsapBoxRef} className="box"></div>
      </div>

      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      <button onClick={handleClick}>Animate</button>
      <div className="circle"></div>
    </main>
  )
}

export default App
