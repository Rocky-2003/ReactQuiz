import { useState, useEffect } from "react";

export default function QuizTimer({ timeOut, onTimeOut, mode }) {
  const [remaningTime, setRemaningTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(mode);
  return (
    <progress
      id="question-time"
      max={timeOut}
      value={remaningTime}
      className={mode}
    />
  );
}
