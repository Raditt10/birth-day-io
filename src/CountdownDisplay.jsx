import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpaceIllustration from './_components/Background';
import Wish from './_components/Wish';

const CountdownDisplay = () => {
  const { name, day, month } = useParams();
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      let target = new Date(now.getFullYear(), parseInt(month) - 1, parseInt(day));
      if (now > target) target.setFullYear(now.getFullYear() + 1);
      
      const isToday = now.getDate() === parseInt(day) && now.getMonth() === parseInt(month) - 1;
      setIsBirthday(isToday);

      const diff = target - now;
      if (isToday) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    const timer = setInterval(calculate, 1000);
    calculate();
    return () => clearInterval(timer);
  }, [day, month]);

  return (
    <div className="split-layout">
      <div className="left-panel">
        <div className="mobile-header-decoration"></div>
        <Link to="/" style={{ textDecoration: 'none', color: '#888', fontFamily: 'JetBrains Mono', marginBottom: '2rem', display: 'block' }}>
           &lt; KEMBALI
        </Link>

        {isBirthday ? (
           <Wish name={name} />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ border: '2px solid currentColor', display: 'inline-block', padding: '5px 10px', fontFamily: 'Bangers', transform: 'rotate(-2deg)', marginBottom: '1rem' }}>
              STATUS: ACTIVE
            </div>
            <h1 className="comic-title" style={{ fontSize: '3rem' }}>
              ULANG TAHUN: <span style={{ textDecoration: 'underline' }}>{name}</span>
            </h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                <TimeBox val={timeLeft.days} label="DAYS" />
                <TimeBox val={timeLeft.hours} label="HRS" />
                <TimeBox val={timeLeft.minutes} label="MIN" />
                <TimeBox val={timeLeft.seconds} label="SEC" />
            </div>
          </motion.div>
        )}
      </div>
      <div className="right-panel"><SpaceIllustration /></div>
    </div>
  );
};

const TimeBox = ({ val, label }) => (
  <div className="countdown-box">
    <div className="count-val">{val < 10 ? `0${val}` : val}</div>
    <div className="count-label">{label}</div>
  </div>
);

export default CountdownDisplay;