import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DatePicker = ({ day, month, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleDateSelect = (selectedDay, selectedMonth) => {
    onDateChange({ day: selectedDay, month: selectedMonth });
    setIsOpen(false);
  };

  const formatDate = () => {
    if (day && month) {
      return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`;
    }
    return 'DD/MM';
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border-3 border-black p-3 md:p-4 font-bold text-center text-xl md:text-2xl focus:border-black focus:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] focus:outline-none transition-all rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.6)] active:-translate-y-1 active:-translate-x-1 active:shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer hover:bg-yellow-50"
      >
        {formatDate()}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Calendar - Mobile: Fixed Half Screen, Desktop: Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 md:absolute md:top-full md:mt-2 md:left-0 md:right-0 md:bottom-auto md:translate-y-0 bg-white border-4 border-black rounded-t-lg md:rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,0.6)] z-50 p-4 md:p-4 h-1/2 md:h-auto md:max-h-96 md:w-full overflow-y-auto"
            >
              {/* Month Selector */}
              <div className="mb-4">
                <label className="block font-['Bangers'] text-lg mb-2">SELECT MONTH</label>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => handleDateSelect(day || 1, m)}
                      className={`p-2 border-2 border-black rounded font-bold text-sm transition-all cursor-pointer ${
                        month === m
                          ? 'bg-yellow-400 shadow-[3px_3px_0_rgba(0,0,0,0.6)]'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {monthNames[m - 1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Day Selector */}
              <div>
                <label className="block font-['Bangers'] text-lg mb-2">SELECT DAY</label>
                <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => handleDateSelect(d, month || 1)}
                      className={`p-2 border-2 border-black rounded font-bold text-sm transition-all cursor-pointer ${
                        day === d
                          ? 'bg-yellow-400 shadow-[3px_3px_0_rgba(0,0,0,0.6)]'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {String(d).padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 bg-black text-white border-2 border-black p-2 rounded font-['Bangers'] text-sm hover:bg-gray-800 transition-all"
              >
                DONE
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;
