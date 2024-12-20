'use client'

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'react-spring';
import { LuMapPin } from "react-icons/lu";

// https://github.com/shuding/cobe/tree/main/website/pages/docs/showcases
function Globe() {
  let canvasRef = useRef<HTMLCanvasElement>(null)
  let pointerInteracting = useRef<number | null>(null)
  let pointerInteractionMovement = useRef(0)
  let fadeMask = 'radial-gradie</div>nt(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)'

  let [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))

  useEffect(() => {
    let width = 0;

    let onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize);
      }
    };
    onResize();

    if (!canvasRef?.current) return;
    let globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [25.105497, 121.597366], size: 0.1 }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = 2.75 + r.get();
        state.width = width * 2;
        state.height = width * 2;
      }
    })

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    }
  }, [r])


  return (
    <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[380px]'>
      <div className='flex items-center gap-2 text-white-2 mt-4 ml-4'>
        <LuMapPin size={24} />
        <h2 className='text-sm font-light'>Taipei, Taiwan (UTC +08:00)</h2>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          overflow: 'visible'
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '1/1',
            maxWidth: 800,
            WebkitMaskImage: fadeMask,
            maskImage: fadeMask
          }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX - pointerInteractionMovement.current
              canvasRef.current && (canvasRef.current.style.cursor = 'grabbing')
            }}
            onPointerUp={() => {
              pointerInteracting.current = null
              canvasRef.current && (canvasRef.current.style.cursor = 'grab')
            }}
            onPointerOut={() => {
              pointerInteracting.current = null
              canvasRef.current && (canvasRef.current.style.cursor = 'grab')
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                let delta = e.clientX - pointerInteracting.current
                pointerInteractionMovement.current = delta
                api.start({
                  r: delta / 200
                })
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0]) {
                let delta = e.touches[0].clientX - pointerInteracting.current
                pointerInteractionMovement.current = delta
                api.start({
                  r: delta / 100
                })
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              contain: 'layout paint size',
              cursor: 'auto',
              userSelect: 'none'
            }}
          />
        </div>
      </div>
    </div>

  );
}

export default Globe;
