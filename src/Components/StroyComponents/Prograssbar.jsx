import React, { useEffect, useState } from 'react';
import './Prograssbar.css';

const Prograssbar = (index, activeIndex, duration) => {
  const [prograss, setPrograss] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrograss((prevPrograss) => {
        if (prevPrograss < 100) {
          return prevPrograss + 1;
        }
        clearInterval(interval);
        return prevPrograss;
      });
    }, duration / 100);

    return () => {
      clearInterval(interval);
    };
  }, [duration, activeIndex]);

  useEffect(() => {
    setPrograss(0);
  }, [activeIndex]);

  const isActive = index === activeIndex;

  return (
    <div className={`prograss-bar-container ${isActive ? 'active' : ''}`}>
      <div
        className={`${isActive ? 'prograss-bar' : ''}`}
        style={{ width: `${prograss}%` }}
      ></div>
    </div>
  );
};

export default Prograssbar;
