import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const QRCodeModal = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white border-4 border-black p-6 max-w-sm w-full shadow-[8px_8px_0px_#000] relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 hover:bg-black hover:text-white transition p-1">
          <X size={24} />
        </button>
        
        <h2 className="font-['Bangers'] text-2xl mb-4 text-center">SCAN FOR INTEL</h2>
        <div className="bg-white p-2 border-2 border-dashed border-black flex justify-center mb-4">
          <QRCodeSVG value={url} size={200} />
        </div>
        
        <p className="font-mono text-xs text-center break-all border p-2 bg-gray-100">
          {url}
        </p>
        
        <button 
          onClick={() => navigator.clipboard.writeText(url)}
          className="w-full mt-4 bg-black text-white font-['Bangers'] text-xl py-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_#888] transition-all"
        >
          COPY LINK
        </button>
      </motion.div>
    </div>
  );
};

export default QRCodeModal;