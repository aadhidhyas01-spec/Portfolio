import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

export default function HeroSculpture3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.z = 6.2;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Neo-Orchid Lighting
    const ambient = new THREE.AmbientLight(0xf5f0e8, 0.9);
    scene.add(ambient);

    const citronLight = new THREE.PointLight(0xd7f36a, 2.4, 20);
    citronLight.position.set(3.5, 3, 4);
    scene.add(citronLight);

    const papayaLight = new THREE.PointLight(0xff765e, 2.2, 20);
    papayaLight.position.set(-3.5, -2.5, 3);
    scene.add(papayaLight);

    const lavenderLight = new THREE.PointLight(0xbda7f8, 2.0, 20);
    lavenderLight.position.set(0, 3.5, -3);
    scene.add(lavenderLight);

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    // Glass-like Translucent Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(1.12, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xbda7f8,
      roughness: 0.18,
      metalness: 0.15,
      transmission: 0.45,
      transparent: true,
      opacity: 0.85,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculpture.add(coreMesh);

    // Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(1.36, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd7f36a,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    sculpture.add(wireMesh);

    // Floating Geometric Rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.92, 0.032, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0xd7f36a,
        emissive: 0xd7f36a,
        emissiveIntensity: 0.35,
      })
    );
    ring1.rotation.x = Math.PI / 3;
    sculpture.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.26, 0.025, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0xff765e,
        emissive: 0xff765e,
        emissiveIntensity: 0.3,
      })
    );
    ring2.rotation.y = Math.PI / 2.6;
    sculpture.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.018, 12, 80),
      new THREE.MeshBasicMaterial({
        color: 0xbda7f8,
        transparent: true,
        opacity: 0.45,
      })
    );
    ring3.rotation.x = -Math.PI / 4;
    sculpture.add(ring3);

    // Connected Neural Nodes
    const nodePositions = [
      new THREE.Vector3(1.8, 0.9, 0.5),
      new THREE.Vector3(-1.7, 1.1, -0.4),
      new THREE.Vector3(1.4, -1.3, -0.6),
      new THREE.Vector3(-1.5, -1.1, 0.8),
      new THREE.Vector3(0.2, 2.0, 0.3),
      new THREE.Vector3(-0.3, -2.0, -0.4),
    ];

    const nodeGeo = new THREE.SphereGeometry(0.11, 16, 16);
    const nodeColors = [0xd7f36a, 0xff765e, 0xbda7f8];
    const nodeMeshes: THREE.Mesh[] = [];

    nodePositions.forEach((pos, idx) => {
      const m = new THREE.Mesh(
        nodeGeo,
        new THREE.MeshStandardMaterial({
          color: nodeColors[idx % nodeColors.length],
          emissive: nodeColors[idx % nodeColors.length],
          emissiveIntensity: 0.45,
        })
      );
      m.position.copy(pos);
      sculpture.add(m);
      nodeMeshes.push(m);
    });

    const linePts: THREE.Vector3[] = [];
    nodePositions.forEach((p, idx) => {
      linePts.push(new THREE.Vector3(0, 0, 0), p);
      const next = nodePositions[(idx + 1) % nodePositions.length];
      linePts.push(p, next);
    });
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePts);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xf5f0e8,
      transparent: true,
      opacity: 0.25,
    });
    sculpture.add(new THREE.LineSegments(lineGeo, lineMat));

    // Floating Particles
    const particleCount = 70;
    const pArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pArray[i] = (Math.random() - 0.5) * 7.5;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pArray, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xd7f36a,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth || 420;
      const nh = container.clientHeight || 420;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      if (!shouldReduceMotion) {
        coreMesh.rotation.y = t * 0.35;
        coreMesh.rotation.x = t * 0.2;
        wireMesh.rotation.y = -t * 0.22;
        ring1.rotation.z = t * 0.4;
        ring2.rotation.x = t * 0.32;
        ring3.rotation.y = -t * 0.28;
        particles.rotation.y = t * 0.06;

        nodeMeshes.forEach((m, idx) => {
          m.scale.setScalar(1 + Math.sin(t * 2 + idx) * 0.14);
        });

        sculpture.rotation.y += (pointer.x * 0.45 - sculpture.rotation.y) * 0.04;
        sculpture.rotation.x += (-pointer.y * 0.32 - sculpture.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      nodeGeo.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
      aria-label="Interactive 3D Neo-Orchid AI & Robotics Sculpture"
    />
  );
}
