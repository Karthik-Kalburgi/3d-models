import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import './App.css'

function EarthModel({ url }) {
  const { scene } = useGLTF(url)
  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  )
}

function TransformerModel({ url }) {
  const { scene } = useGLTF(url)
  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  )
}


function LambariModel({ url }) {
  const { scene } = useGLTF(url)
  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  )
}

function App() {
  const [showEarth, setShowEarth] = useState(false)
  const [showTransformer, setShowTransformer] = useState(false)
  const [showlambari, setShowLambari ] = useState(false)

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setShowEarth(!showEarth)}>
          Toggle Earth Model
        </button>
        <button onClick={() => setShowTransformer(!showTransformer)}>
          Toggle Transformer Model
        </button>
        <button onClick={() => setShowLambari(!showlambari)}>
          Toggle lambo Model
        </button>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          {showEarth && <EarthModel url="/earth.gltf" />}
          {showTransformer && <TransformerModel url="/transformers/tra.gltf" />}
          {showlambari && <LambariModel url="/lambari/lambo.gltf" />}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App

// Add the following styles in App.css


