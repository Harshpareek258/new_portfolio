import React, { useEffect, useRef } from 'react';

const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for 3D effect
    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = Math.random() * 2 + 1;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z -= this.vz;

        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = this.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = this.y * scale + canvas.height / 2 * (1 - scale);
        const size2d = this.size * scale;

        ctx.save();
        ctx.globalAlpha = this.opacity * scale;
        ctx.fillStyle = '#FF921C';
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Wireframe nodes
    class WireframeNode {
      x: number;
      y: number;
      z: number;
      rotationX: number;
      rotationY: number;
      rotationZ: number;

      constructor() {
        this.x = (Math.random() - 0.5) * 400;
        this.y = (Math.random() - 0.5) * 400;
        this.z = (Math.random() - 0.5) * 400;
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
      }

      update() {
        this.rotationX += 0.01;
        this.rotationY += 0.015;
        this.rotationZ += 0.008;
      }

      project() {
        const distance = 800;
        const scale = distance / (distance + this.z);
        return {
          x: this.x * scale + canvas.width / 2,
          y: this.y * scale + canvas.height / 2,
          scale: scale
        };
      }

      draw() {
        const projected = this.project();
        if (projected.scale > 0.1) {
          ctx.save();
          ctx.globalAlpha = projected.scale * 0.6;
          ctx.strokeStyle = '#FF921C';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, 2 * projected.scale, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Create particles and wireframe nodes
    const particles: Particle[] = [];
    const wireframeNodes: WireframeNode[] = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    const nodeCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < nodeCount; i++) {
      wireframeNodes.push(new WireframeNode());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw wireframe nodes
      wireframeNodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Draw connections between nearby wireframe nodes
      ctx.strokeStyle = '#FF921C';
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < wireframeNodes.length; i++) {
        for (let j = i + 1; j < wireframeNodes.length; j++) {
          const node1 = wireframeNodes[i];
          const node2 = wireframeNodes[j];
          const distance = Math.sqrt(
            Math.pow(node1.x - node2.x, 2) +
            Math.pow(node1.y - node2.y, 2) +
            Math.pow(node1.z - node2.z, 2)
          );

          if (distance < 200) {
            const proj1 = node1.project();
            const proj2 = node2.project();
            
            if (proj1.scale > 0.1 && proj2.scale > 0.1) {
              ctx.beginPath();
              ctx.moveTo(proj1.x, proj1.y);
              ctx.lineTo(proj2.x, proj2.y);
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-60"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Additional geometric elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#FF921C]/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#FF921C]/40 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-[#FF921C]/20 rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-[#FF921C]/35 -rotate-12 animate-pulse"></div>
      </div>
    </>
  );
};

export default Background3D;