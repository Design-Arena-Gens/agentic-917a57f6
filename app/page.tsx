'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function Facade() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main concrete base structure */}
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[12, 5, 1]} />
        <meshStandardMaterial
          color="#b8b8b8"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Left concrete wall */}
      <mesh position={[-5, 2.5, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[2, 5, 0.8]} />
        <meshStandardMaterial
          color="#a0a0a0"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Right concrete box */}
      <mesh position={[5, 3, 0.8]} castShadow receiveShadow>
        <boxGeometry args={[2, 3, 1.5]} />
        <meshStandardMaterial
          color="#9a9a9a"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      {/* Large glass panels - center */}
      <mesh position={[0, 2.5, 0.55]}>
        <boxGeometry args={[6, 4, 0.05]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transmission={0.95}
          thickness={0.5}
          roughness={0.05}
          metalness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Left glass section */}
      <mesh position={[-4, 2.5, 1]}>
        <boxGeometry args={[1.5, 4, 0.05]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transmission={0.95}
          thickness={0.5}
          roughness={0.05}
          metalness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Vertical metal fins - left side */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`fin-left-${i}`} position={[-6 + i * 0.4, 2.5, 1]} castShadow>
          <boxGeometry args={[0.08, 4.5, 0.15]} />
          <meshStandardMaterial
            color="#505050"
            roughness={0.3}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* Vertical metal fins - right side */}
      {[...Array(6)].map((_, i) => (
        <mesh key={`fin-right-${i}`} position={[3 + i * 0.5, 3, 1.6]} castShadow>
          <boxGeometry args={[0.1, 3.5, 0.15]} />
          <meshStandardMaterial
            color="#404040"
            roughness={0.25}
            metalness={0.95}
          />
        </mesh>
      ))}

      {/* Wood accent panel - lower section */}
      <mesh position={[2, 1, 1.2]} castShadow receiveShadow>
        <boxGeometry args={[4, 1.5, 0.2]} />
        <meshStandardMaterial
          color="#8b4513"
          roughness={0.7}
          metalness={0}
        />
      </mesh>

      {/* Wood accent panel - upper section */}
      <mesh position={[-2, 4, 1]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.8, 0.15]} />
        <meshStandardMaterial
          color="#a0522d"
          roughness={0.65}
          metalness={0}
        />
      </mesh>

      {/* Geometric protruding boxes */}
      <mesh position={[3.5, 1.5, 1.5]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1]} />
        <meshStandardMaterial
          color="#707070"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      <mesh position={[-3, 4.2, 1.3]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1, 1.2]} />
        <meshStandardMaterial
          color="#808080"
          roughness={0.65}
          metalness={0.25}
        />
      </mesh>

      {/* LED linear lights - horizontal */}
      <mesh position={[0, 0.3, 1.2]}>
        <boxGeometry args={[8, 0.05, 0.05]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
        <pointLight intensity={1} distance={3} color="#ffffff" />
      </mesh>

      {/* LED strip - vertical left */}
      <mesh position={[-6, 2.5, 1.1]}>
        <boxGeometry args={[0.03, 4.5, 0.05]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e0e0e0"
          emissiveIntensity={1.5}
        />
        <pointLight intensity={0.5} distance={2} color="#ffffff" />
      </mesh>

      {/* LED strip - vertical right */}
      <mesh position={[6, 2.8, 1.7]}>
        <boxGeometry args={[0.03, 3.5, 0.05]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e0e0e0"
          emissiveIntensity={1.5}
        />
        <pointLight intensity={0.5} distance={2} color="#ffffff" />
      </mesh>

      {/* Metal frame accents */}
      <mesh position={[0, 4.8, 0.6]} castShadow>
        <boxGeometry args={[12, 0.2, 0.3]} />
        <meshStandardMaterial
          color="#303030"
          roughness={0.2}
          metalness={1}
        />
      </mesh>

      <mesh position={[0, 0.2, 0.6]} castShadow>
        <boxGeometry args={[12, 0.2, 0.3]} />
        <meshStandardMaterial
          color="#303030"
          roughness={0.2}
          metalness={1}
        />
      </mesh>

      {/* Ground platform */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[14, 0.2, 3]} />
        <meshStandardMaterial
          color="#404040"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  )
}

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#e8f4f8' }}>
      <Canvas
        shadows
        camera={{ position: [15, 5, 15], fov: 50 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <color attach="background" args={['#e8f4f8']} />

        {/* Natural daylight setup */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
        />
        <directionalLight
          position={[-10, 15, -5]}
          intensity={0.6}
          color="#b8d4e8"
        />

        {/* Hemisphere light for sky effect */}
        <hemisphereLight
          color="#ffffff"
          groundColor="#b8d4e8"
          intensity={0.4}
        />

        <Suspense fallback={null}>
          <Facade />
          <ContactShadows
            position={[0, 0.1, 0]}
            opacity={0.5}
            scale={20}
            blur={2}
            far={5}
          />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#333',
        fontSize: '14px',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.8)',
        padding: '10px 20px',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)'
      }}>
        <strong>Modern Residential Façade</strong><br />
        Drag to rotate • Scroll to zoom • Right-click to pan
      </div>
    </div>
  )
}
