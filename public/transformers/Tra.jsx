/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.0 tra.gltf 
Author: Kairi DC2 (https://sketchfab.com/spritetrap)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dinobot-grimlock-transformers-earth-wars-d3884aa4f10e4cdb8aefebe267ecf791
Title: Dinobot Grimlock - Transformers Earth Wars
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene } = useGLTF('/tra.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials, animations } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={89.1}>
          <group name="d0d900f71b1c44ad98219a97cd227e01fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="alt_(merge)">
                  <group name="alt">
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <group name="LOD0">
                        <group name="Grimlock_1_Vehicle_x0" />
                      </group>
                      <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_8.skeleton} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tra.gltf')
