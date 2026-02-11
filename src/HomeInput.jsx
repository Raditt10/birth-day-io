import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpaceIllustration from './_components/Background';
import MonthSelect from './_components/MonthSelect';

const HomeInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && day) navigate(`/countdown/${name}/${day}/${month}`);
  };

  return (
    <div className="split-layout">
      <motion.div className="left-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="mobile-header-decoration"></div>
        
        <h1 className="comic-title">
          <span className="outline-text">COUNTDOWN</span><br/> TO LAUNCH
        </h1>
        <p className="comic-subtitle">
           // MASUKKAN DATA INI UNTUK MEMULAI HITUNGAN MUNDUR ULANG TAHUNMU! //
        </p>

        <form className="comic-form" onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="comic-label">NAMA KAMU</label>
            <input type="text" className="comic-input" placeholder="NAME..." value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="date-row">
            <div style={{ flex: 1 }}>
              <label className="comic-label">TANGGAL</label>
              <input type="number" className="comic-input" placeholder="DD" min="1" max="31" value={day} onChange={(e) => setDay(e.target.value)} required />
            </div>
            <div style={{ flex: 2 }}>
              <label className="comic-label">BULAN</label>
              <MonthSelect value={month} onChange={(e) => setMonth(e.target.value)} />
            </div>
          </div>

          <button type="submit" className="comic-btn-launch">INITIALIZE COUNTDOWN</button>
        </form>
      </motion.div>

      <div className="right-panel">
        <SpaceIllustration />
      </div>
    </div>
  );
};
export default HomeInput;