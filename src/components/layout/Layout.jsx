import React from 'react';

const MangaLayout = ({ children, sidePanelContent }) => {
  return (
    // WRAPPER UTAMA
    <div className="flex flex-col lg:flex-row min-h-[100dvh] w-full bg-zinc-900 text-white overflow-x-hidden">
      
      {/* --- PANEL VISUAL (KANAN di Desktop, ATAS di Mobile) --- */}
      <div className="relative order-1 lg:order-2 w-full h-[40vh] lg:h-auto lg:w-[45%] lg:flex-1 overflow-hidden bg-black group">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-50 bg-cover bg-center grayscale contrast-125 mix-blend-screen transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          style={{ backgroundImage: "url('/comicpanel2.webp')" }} 
        />
        
        {/* --- SEPARATOR PROFESIONAL (BLUR/NYATU) --- */}
        
        {/* 1. DESKTOP VERTICAL SEPARATOR (Sisi Kiri Panel Gambar) */}
        {/* Gradient vertikal: atas transparan -> tengah kuning -> bawah transparan */}
        {/* Gradient horizontal: kanan transparan -> kiri kuning -> transparan (untuk efek blend) */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 z-20 pointer-events-none">
           {/* Core Glow Line */}
           <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400/80 to-transparent"></div>
           {/* Ambient Glow (Blur) */}
           <div className="absolute left-[-20px] top-0 bottom-0 w-16 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent blur-xl"></div>
        </div>

        {/* 2. MOBILE HORIZONTAL SEPARATOR (Sisi Bawah Panel Gambar) */}
        <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-12 z-20 pointer-events-none">
           {/* Core Glow Line */}
           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"></div>
           {/* Ambient Glow (Blur) */}
           <div className="absolute bottom-[-10px] left-0 right-0 h-16 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent blur-xl"></div>
        </div>
        
        {/* Overlay standard */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black opacity-80" />

        {/* Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 100%' }} />

        {/* Content Side Panel */}
        <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
           {sidePanelContent}
        </div>
      </div>

      {/* --- PANEL FORM (KIRI di Desktop, BAWAH di Mobile) --- */}
      <div className="relative order-2 lg:order-1 w-full lg:w-[55%] flex flex-col justify-center bg-zinc-900 min-h-[60vh] lg:min-h-screen">
        <div className="flex-1 flex flex-col justify-center relative z-10">
            {children}
        </div>
         <div className="absolute inset-0 -z-0 opacity-[0.03]" 
             style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}
        />
      </div>

    </div>
  );
};

export default MangaLayout;