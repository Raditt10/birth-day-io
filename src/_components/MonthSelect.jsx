import React, { useState, useRef, useEffect } from 'react';

const MonthSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (idx) => {
    onChange({ target: { value: idx + 1 } });
    setIsOpen(false);
  };

  return (
    <div className="comic-month-select" ref={dropdownRef}>
      <div className="comic-month-button comic-input" onClick={() => setIsOpen(!isOpen)}>
        <span>{months[value - 1] || 'Select'}</span>
        {/* Panah SVG Adaptive (Putih di Desktop, Hitam di Mobile via CSS filter/color inheritance) */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {isOpen && (
        <div className="comic-month-dropdown">
          {months.map((m, i) => (
            <div key={i} className="comic-month-option" onClick={() => handleSelect(i)}>
              {m}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MonthSelect;