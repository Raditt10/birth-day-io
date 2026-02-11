import React from 'react';
import { motion } from 'framer-motion';

// Komponen overlay titik-titik halftone (Tekstur Komik)
const HalftoneOverlay = () => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
    backgroundSize: '8px 8px', opacity: 0.3, pointerEvents: 'none', zIndex: 1
  }} />
);

const SpaceIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000', overflow: 'hidden' }}>
      <HalftoneOverlay />
      
      {/* ================= LAYER 1: ATMOSFER ================= */}
      
      {/* BINTANG TITIK KECIL (Background Stars) */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          style={{
            position: 'absolute', width: Math.random() * 2 + 1, height: Math.random() * 2 + 1,
            background: '#fff', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            borderRadius: '50%'
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: Math.random() * 3 + 1, repeat: Infinity }}
        />
      ))}

      {/* ================= LAYER 2: OBJEK LATAR ================= */}
      
      {/* BULAN (Gaya Noir) */}
      <motion.div
        style={{ position: 'absolute', top: '10%', right: '10%', width: '120px', height: '120px', zIndex: 2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100">
           {/* Lingkaran Utama: Isi Hitam, Garis Putih Tebal */}
           <circle cx="50" cy="50" r="45" fill="#000" stroke="#fff" strokeWidth="3"/>
           {/* Kawah-kawah */}
           <circle cx="30" cy="40" r="8" fill="none" stroke="#fff" strokeWidth="2"/>
           <circle cx="70" cy="60" r="12" fill="none" stroke="#fff" strokeWidth="2"/>
           <circle cx="60" cy="25" r="5" fill="none" stroke="#fff" strokeWidth="2"/>
         </svg>
      </motion.div>


      {/* ================= LAYER 3: OBJEK UTAMA ================= */}
      
      {/* ROKET (Meluncur) */}
      <motion.div
         style={{ position: 'absolute', zIndex: 3, width: '80px', height: 'auto' }}
         initial={{ bottom: '-20%', left: '-20%', rotate: 45 }}
         animate={{ 
            bottom: ['-20%', '120%'], 
            left: ['-20%', '120%'],
            opacity: [1, 1, 0]
         }}
         transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
         <svg viewBox="0 0 60 100">
            {/* Badan Roket */}
            <path d="M30 0 L10 30 L10 80 L30 90 L50 80 L50 30 Z" fill="#fff" stroke="#000" strokeWidth="3"/>
            <circle cx="30" cy="40" r="10" fill="#000" stroke="#fff" strokeWidth="2"/>
            {/* Sirip */}
            <path d="M10 70 L0 90 L10 85 Z" fill="#000"/>
            <path d="M50 70 L60 90 L50 85 Z" fill="#000"/>
            {/* Api */}
            <path d="M20 90 L30 110 L40 90" stroke="#fff" strokeWidth="3" fill="none" />
         </svg>
      </motion.div>

      {/* ASTRONOT (Mengambang) */}
      <motion.div
        style={{ position: 'absolute', top: '50%', left: '50%', width: '180px', height: '180px', zIndex: 4 }}
        initial={{ x: '-50%', y: '-50%' }}
        animate={{ 
            y: ['-60%', '-40%', '-60%'], // Gerakan naik turun
            rotate: [-5, 5, -5] // Rotasi pelan
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Backpack */}
          <rect x="40" y="50" width="120" height="100" rx="10" fill="#000" />
          
          {/* Badan & Kaki */}
          <path d="M70 140 L60 180 L85 185 L95 150" fill="#fff" stroke="#000"/>
          <path d="M130 140 L140 180 L115 185 L105 150" fill="#fff" stroke="#000"/>
          <rect x="65" y="60" width="70" height="90" rx="15" fill="#fff" stroke="#000" />

          {/* Helm & Visor */}
          <circle cx="100" cy="60" r="35" fill="#fff" stroke="#000" />
          <path d="M75 55 Q100 35 125 55 Q125 75 100 80 Q75 75 75 55 Z" fill="#000" />
          <path d="M85 50 Q95 45 105 50" stroke="#fff" strokeWidth="2" />

          {/* Tangan */}
          <path d="M65 80 Q40 100 50 130" stroke="#fff" strokeWidth="5"/>
          <path d="M135 80 Q160 100 150 130" stroke="#fff" strokeWidth="5"/>
        </svg>
      </motion.div>

    </div>
  );
};

export default SpaceIllustration;