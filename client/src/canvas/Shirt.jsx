import React from 'react'
import { easing } from "maath"
import { useSnapshot } from "valtio"
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from "../store"
const Shirt = () => {


  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF("/shirt_baked.glb")
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh castShadow 
      geometry={nodes.T_Shirt_male.geometry} 
      material={materials.lambert1} 
      material-roughness={1} 
      dispose={null}>
        {snap.isFullTexture && (
          <Decal 
          map={fullTexture} 
          scale={1} 
          position={[0, 0, 0]} 
          rotation={[0, 0, 0]} />
        )}
        {snap.isLogoTexture && (
          <Decal 
          map={logoTexture} 
          scale={0.15} 
          position={[0, 0.04, 0.15]} 
          rotation={[0, 0, 0]} 
          map-anisotrapy={16}
          depthTest={false}
          depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt