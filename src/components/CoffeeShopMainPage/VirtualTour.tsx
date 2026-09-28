import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function VirtualTour() {
    const { scene } = useGLTF('/models/cafe.glb');

    return (
        <div style={{ width: '100%', height: '1000px', background: '#111' }}>
            <Canvas camera={{ position: [2, 1, -1], fov: 55 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                <Suspense fallback={null}>
                    <primitive object={scene} />
                </Suspense>
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
}

export default VirtualTour;
