import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import Footer from '../components/ui/Footer';
import LoadingScreen from '../components/ui/LoadingScreen';
import BackButton from '../components/ui/BackButton';

// --- PERSONA 5 CONSTANTS ---
const P5_YELLOW = "#fbbf24";
const P5_WHITE = "#ffffff";

// --- UTILS: JAGGED EDGE SVG ---
const JaggedEdge = ({ className }) => (
  <div className={`overflow-hidden w-full h-4 ${className}`}>
    <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
      <polygon points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0 100,10 0,10" fill="currentColor" />
    </svg>
  </div>
);

// --- P5 STAR ICON ---
const P5Star = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

// --- CALLING CARD (SHARE MODAL) ---
const CallingCardModal = ({ url, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ rotate: -10, scale: 0.5, y: 100 }} 
        animate={{ rotate: -2, scale: 1, y: 0 }}
        exit={{ rotate: 10, scale: 0.5, y: 100 }}
        className="relative max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        {/* Card Body */}
        <div className="bg-yellow-300 p-1 shadow-[20px_20px_0_rgba(0,0,0,0.8)] transform skew-x-[-5deg]">
          <div className="bg-white border-4 border-black p-6 flex flex-col items-center relative overflow-hidden">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" 
                 style={{backgroundImage: 'radial-gradient(black 1px, transparent 1px)', backgroundSize: '10px 10px'}}>
            </div>

            {/* Calling Card Header */}
            <div className="bg-yellow-300 text-black font-['Bangers'] text-4xl px-4 py-1 -rotate-2 border-2 border-black absolute -top-4 -left-4 shadow-[4px_4px_0_#000]">
              TAKE YOUR HEART
            </div>

            <h2 className="text-black font-mono font-bold mt-6 mb-4 text-center tracking-widest uppercase">
              SECRET INVITATION LINK
            </h2>

            <div className="bg-black p-2 transform rotate-1 border-4 border-yellow-300 mb-6">
              <QRCodeSVG value={url} size={150} fgColor={P5_WHITE} bgColor="#000000" />
            </div>

            <div className="w-full flex gap-2">
              <input 
                readOnly 
                value={url} 
                className="flex-1 bg-gray-100 border-2 border-black text-yellow-500 font-mono text-xs px-2 py-2 outline-none"
              />
              <button 
                onClick={handleCopy}
                className={`px-4 font-black font-sans uppercase border-2 border-black transition-all ${copied ? 'bg-black text-yellow-300' : 'bg-yellow-300 text-black hover:bg-yellow-400'}`}
              >
                {copied ? 'STOLEN!' : 'STEAL'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Close Button X */}
        <button onClick={onClose} className="absolute -top-10 -right-5 text-black font-['Bangers'] text-5xl drop-shadow-[4px_4px_0_#fbbf24] hover:scale-110 transition-transform">
          X
        </button>
      </motion.div>
    </motion.div>
  );
};

// --- P5 GIFT BOX ---
const PhantomGiftBox = ({ character, name, onOpen, isLocked = true }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isLocked) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <motion.div 
      className="relative group"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {/* Target Notification */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 text-center z-10">
        <div className="bg-white text-black px-2 py-1 transform -skew-x-12 border-2 border-yellow-300 shadow-[4px_4px_0_#fbbf24]">
          <p className="font-['Bangers'] text-xl tracking-wider transform skew-x-12">TARGET: {name}</p>
        </div>
      </div>

      <motion.div
        onClick={handleOpen}
        className={`relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center ${isLocked ? "cursor-not-allowed grayscale" : "cursor-pointer"}`}
        animate={isOpening ? { rotate: [0, -10, 10, -10, 0], scale: 1.2, opacity: 0 } : { y: [0, -10, 0] }}
        transition={isOpening ? { duration: 0.5 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={!isLocked ? { scale: 1.05, rotate: -2 } : {}}
      >
        {/* The Box - Stylized as a Treasure Chest */}
        <div className={`w-full h-full bg-white border-4 border-black relative shadow-[10px_10px_0_#fbbf24] transform rotate-3`}>
          {/* Pattern */}
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(135deg, #ddd, #ddd 10px, transparent 10px, transparent 20px)'}} />
          
          {/* Cross Tape */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-8 bg-yellow-300 border-y-2 border-black absolute transform -rotate-3"></div>
             <div className="h-full w-8 bg-yellow-300 border-x-2 border-black absolute transform -rotate-3"></div>
          </div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
             {isLocked ? (
                <div className="bg-black p-3 border-2 border-white transform rotate-45 shadow-[4px_4px_0_#fbbf24]">
                   <div className="transform -rotate-45 font-black text-white text-2xl">🔒</div>
                </div>
             ) : (
                <div className="bg-black text-yellow-300 px-4 py-2 font-['Bangers'] text-2xl border-2 border-white transform -rotate-6 animate-pulse shadow-[5px_5px_0_#fbbf24]">
                   OPEN ME!
                </div>
             )}
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
         {isLocked ? (
             <div className="bg-white inline-block px-4 py-1 transform -skew-x-12 border border-black">
                 <span className="text-yellow-500 font-mono font-bold text-xs uppercase tracking-widest transform skew-x-12 block">
                     Security Level: MAX
                 </span>
             </div>
         ) : (
             <div className="bg-yellow-300 text-black inline-block px-4 py-1 font-['Bangers'] text-xl tracking-widest border-2 border-black shadow-[4px_4px_0_#000]">
                 TREASURE SECURED
             </div>
         )}
      </div>
    </motion.div>
  );
};

// --- P5 VOICE PLAYER ---
const PhantomAudio = ({ characterName, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const voiceFiles = {
    gojo: '/voices/gojo_birthday.mp3',
    leon: '/voices/leon_birthday.mp3',
    levi: '/voices/levi_birthday.mp3',
    eren_jaeger: '/voices/eren_jaeger_birthday.mp3'
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-lg mx-auto p-4">
      <div className="bg-white p-1 transform -rotate-1 shadow-[10px_10px_0_#fbbf24]">
        <div className="border-2 border-black p-6 bg-gray-100 relative overflow-hidden">
            {/* Visualizer Lines Background */}
            <div className="absolute inset-0 flex justify-between opacity-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`w-1 bg-yellow-300 h-full transform skew-x-12`} />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-black font-['Bangers'] text-3xl mb-4 text-shadow-yellow tracking-wide">
                    CONFIDENTIAL AUDIO
                </h3>
                
                <motion.button
                    onClick={handlePlay}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-20 h-20 flex items-center justify-center border-4 border-black transition-all ${isPlaying ? 'bg-yellow-300' : 'bg-white'} shadow-[4px_4px_0_#000]`}
                >
                    {isPlaying ? (
                        <div className="flex gap-2">
                           <div className="w-2 h-8 bg-black" />
                           <div className="w-2 h-8 bg-black" />
                        </div>
                    ) : (
                         <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[30px] border-l-black border-b-[15px] border-b-transparent ml-2" />
                    )}
                </motion.button>
                
                <div className="mt-4 w-full bg-gray-300 h-2 skew-x-[-20deg] border border-gray-400">
                    <motion.div 
                        className="h-full bg-yellow-300"
                        animate={{ width: isPlaying ? "100%" : "0%" }}
                        transition={{ duration: 10, ease: "linear" }} // Mock duration
                    />
                </div>
                
                <p className="mt-2 text-yellow-600 font-mono text-xs font-bold bg-white px-2">
                    SENDER: {characterName.toUpperCase()}
                </p>
                <audio ref={audioRef} onEnded={() => setIsPlaying(false)} src={voiceFiles[characterName]} />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- P5 CLOCK COMPONENT ---
const PersonaClock = ({ val, label, urgent }) => (
    <div className={`relative group transform ${urgent ? 'scale-110' : ''}`}>
        <div className={`
            bg-white text-black border-4 border-black
            p-2 sm:p-4 min-w-[80px] sm:min-w-[100px]
            flex flex-col items-center justify-center
            shadow-[8px_8px_0_#fbbf24]
            transition-transform duration-300
            hover:-translate-y-2 hover:shadow-[12px_12px_0_#fbbf24]
            ${urgent ? 'animate-pulse border-yellow-400 text-yellow-400' : ''}
            clip-path-polygon
        `}
        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
        >
            <span className="font-['Bangers'] text-5xl sm:text-7xl leading-none tracking-tighter drop-shadow-md">
                {val < 10 ? `0${val}` : val}
            </span>
            <span className="bg-black text-yellow-300 font-black font-sans text-[10px] sm:text-xs px-2 py-0.5 uppercase tracking-widest transform -skew-x-12 mt-1">
                {label}
            </span>
        </div>
    </div>
);

// --- MAIN PAGE ---
const CountdownMission = () => {
  const { name, day, month, character } = useParams();
  const navigate = useNavigate();
  const [showShare, setShowShare] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isBirthday, setIsBirthday] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [isCleaningData, setIsCleaningData] = useState(false);

  // Character Data
  const CHARACTER_CONFIG = {
    gojo: { img: '/avatar/Gojo_satoru.webp', name: 'SATORU GOJO' },
    leon: { img: '/avatar/Leon_scott_keneddy.webp', name: 'LEON KENNEDY' },
    levi: { img: '/avatar/levi_ackermen.webp', name: 'LEVI ACKERMAN' },
    vanguard: { img: '/comicpanel.webp', name: 'VANGUARD' },
    chrono: { img: '/comicpanel.webp', name: 'CHRONO' },
    neon: { img: '/comicpanel2.webp', name: 'NEON' }
  };
  
  const activeChar = CHARACTER_CONFIG[character] || CHARACTER_CONFIG['gojo'];

  const getPhaseData = (days) => {
    if (days === 0 && !isBirthday) return { dialog: "IT'S SHOWTIME! THE MOMENT IS NOW!" };
    if (days > 100) return { dialog: "Still a long way to go. Don't let your guard down." };
    if (days > 30)  return { dialog: "The deadline approaches. Prepare yourself." };
    if (days > 0)   return { dialog: "Only a few days left! Are you ready to steal the show?" };
    return { dialog: "Mission Complete. Happy Birthday." };
  };

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      let target = new Date(now.getFullYear(), parseInt(month) - 1, parseInt(day));
      if (now > target) target.setFullYear(now.getFullYear() + 1);
      
      const isToday = now.getDate() === parseInt(day) && now.getMonth() === parseInt(month) - 1;
      setIsBirthday(isToday);

      const diff = target - now;
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      setTimeLeft({
        totalDays: daysLeft,
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    
    const timer = setInterval(calculate, 1000);
    calculate();
    return () => clearInterval(timer);
  }, [day, month]);

  const location = useLocation();
  const isFromLoading = location.state?.fromLoading;
  const phaseData = timeLeft ? getPhaseData(timeLeft.totalDays) : { dialog: "..." };

  if (!timeLeft) return <LoadingScreen text="INFILTRATING..." />;
  if (isCleaningData) return <LoadingScreen text="ESCAPING..." />;

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] font-sans overflow-x-hidden selection:bg-yellow-300 selection:text-black">
      
      {/* --- BACKGROUND GRAPHICS --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         {/* Halftone Pattern */}
         <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
         {/* Dynamic Yellow Shape */}
         <div className="absolute top-0 right-0 w-[80vw] h-[120vh] bg-yellow-200 transform -skew-x-12 translate-x-1/4"></div>
      </div>

      {/* --- RETURN BUTTON (MENU STYLE) --- */}
      <BackButton to="/" label="RETURN" />

      <motion.div 
        className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-screen relative z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      >
        
        {/* --- LEFT PANEL: STATS & DIALOGUE (Col 1-5) --- */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center p-6 lg:p-12 relative">
            {/* Header Date/Weather (Cosmetic) */}
            <div className="absolute top-0 left-0 w-full bg-white text-black p-2 border-b-4 border-yellow-300 transform -skew-y-1 lg:hidden">
                <span className="font-mono font-bold ml-4">CASE FILE: {day}/{month}</span>
            </div>

            {/* CHARACTER DIALOGUE BOX */}
            <div className="mb-12 relative">
                {/* Character Portrait (Cutout Style) */}
                <div className="w-32 h-32 lg:w-48 lg:h-48 absolute -top-16 -left-4 lg:-left-10 z-20 drop-shadow-[5px_5px_0_rgba(0,0,0,0.5)] transform rotate-[-5deg]">
                     <img src={`/chibi/chibi_${character}.webp`} alt={character} className="w-full h-full object-contain filter grayscale contrast-125" />
                </div>

                {/* Speech Bubble */}
                <div className="bg-white border-4 border-black p-6 pt-16 lg:pt-8 lg:pl-32 shadow-[10px_10px_0_#fbbf24] transform -rotate-1 relative z-10 clip-path-polygon"
                     style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 5% 100%, 0% 90%)'}}>
                    <div className="text-gray-600 font-mono text-xs font-bold mb-1 uppercase tracking-widest border-b border-gray-400 pb-1">
                        PHANTOM THIEF // {activeChar.name}
                    </div>
                    <p className="text-black font-['Bangers'] text-2xl lg:text-4xl tracking-wide leading-tight">
                        "{phaseData.dialog}"
                    </p>
                    <div className="absolute -right-2 -bottom-2">
                        <P5Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* TARGET INFO */}
            <div className="mb-8">
                <div className="inline-block bg-black text-white px-4 py-1 transform skew-x-[-10deg] border-2 border-white mb-2">
                    <span className="font-mono font-black text-sm uppercase transform skew-x-[10deg] block">Current Target</span>
                </div>
                <h1 className="font-['Bangers'] text-6xl lg:text-8xl text-black uppercase leading-none drop-shadow-[4px_4px_0_#fbbf24] transform -rotate-2">
                    {name}
                </h1>
            </div>

            {/* ACTION BUTTON */}
            <button 
                onClick={() => setShowShare(true)}
                className="group relative w-full h-20 bg-yellow-300 border-4 border-black overflow-hidden shadow-[8px_8px_0_#000] transform hover:-translate-y-1 hover:shadow-[12px_12px_0_#000] transition-all"
            >
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12 origin-bottom-left"></div>
                <div className="relative z-10 flex items-center justify-center h-full gap-4">
                    <span className="font-['Bangers'] text-3xl text-black tracking-widest group-hover:text-yellow-300 transition-colors">
                        SEND CALLING CARD
                    </span>
                    <P5Star className="w-6 h-6 text-black group-hover:text-yellow-300 group-hover:rotate-180 transition-all duration-500" />
                </div>
            </button>
        </div>

        {/* --- RIGHT PANEL: COUNTDOWN & VISUAL (Col 6-12) --- */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative flex flex-col items-center justify-center min-h-[50vh] lg:min-h-screen p-8">
            
            {/* Character Background Splash */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" 
                     style={{backgroundImage: `url('${activeChar.img}')`}}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5] via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl">
                
                {/* Visualizer / Gift Area */}
                <div className="mb-12 flex justify-center">
                    {isBirthday ? (
                         giftOpened ? (
                             <PhantomAudio characterName={character} name={name} />
                         ) : (
                             <PhantomGiftBox character={character} name={name} onOpen={() => setGiftOpened(true)} isLocked={false} />
                         )
                    ) : (
                        <PhantomGiftBox character={character} name={name} isLocked={true} />
                    )}
                </div>

                {/* Asymmetrical Countdown */}
                {!isBirthday && (
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-8 transform -rotate-3">
                        <PersonaClock val={timeLeft.totalDays} label="DAYS" />
                        <PersonaClock val={timeLeft.hours} label="HRS" />
                        <div className="hidden sm:block w-px h-24 bg-yellow-300 transform rotate-12 mx-2"></div>
                        <PersonaClock val={timeLeft.minutes} label="MIN" />
                        <PersonaClock val={timeLeft.seconds} label="SEC" urgent={true} />
                    </div>
                )}
            </div>
        </div>

      </motion.div>

      <AnimatePresence>
        {showShare && <CallingCardModal url={window.location.href} onClose={() => setShowShare(false)} />}
      </AnimatePresence>

      <div className="relative z-50 bg-white text-black border-t-4 border-yellow-300">
         <JaggedEdge className="text-yellow-300 -mt-3 absolute top-0 w-full" />
         <Footer />
      </div>
    </div>
  );
};

export default CountdownMission;