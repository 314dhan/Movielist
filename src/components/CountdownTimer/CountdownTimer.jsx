import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';
import beepSound from "../../assets/beep.mp3";

function CountdownTimer() {
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const audioRef = React.createRef(); // Membuat referensi untuk elemen audio

  const startTimer = () => {
    const totalSeconds = (parseInt(inputMinutes) || 0) * 60 + (parseInt(inputSeconds) || 0);
    if (totalSeconds > 0) {
      setIsActive(true);
      setTimeRemaining(totalSeconds);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeRemaining(null);
    setInputMinutes('');
    setInputSeconds('');
  };

  useEffect(() => {
    let timer;
    if (isActive && timeRemaining !== null && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      console.log("Timer has finished!");
      setIsActive(false);
      audioRef.current.play(); // Memainkan suara ketika waktu habis
      resetTimer();
    }
    return () => clearInterval(timer);
  }, [isActive, timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="countdown-container">
      <div className="countdown">
        <h1 className="countdown-title">Countdown Timer</h1>
        <div className="input-group">
          <input
            type="number"
            placeholder="Minutes"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            disabled={isActive}
          />
          <span className="colon">:</span>
          <input
            type="number"
            placeholder="Seconds"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
            disabled={isActive}
          />
        </div>
        <p className="time-remaining">
          {timeRemaining !== null && timeRemaining !== 0 ? `Time Remaining: ${formatTime(timeRemaining)}` : 'Time\'s up!'}
        </p>
        {!isActive ? (
          <button className="start-button" onClick={startTimer} disabled={!inputMinutes && !inputSeconds}>
            Start
          </button>
        ) : (
          <button className="reset-button" onClick={resetTimer}>
            Reset
          </button>
        )}
        {/* Elemen audio untuk memainkan suara */}
        <audio ref={audioRef} src={beepSound} />
      </div>
    </div>
  );
}

export default CountdownTimer;
