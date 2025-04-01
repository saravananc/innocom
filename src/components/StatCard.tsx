
import React, { useState, useEffect, useRef } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  text: string;
  duration?: number;
}

const StatCard = ({
  value,
  suffix = "",
  text,
  duration = 2000,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = Math.min(value, 9999); // Cap at 9999 to prevent excessive iterations
    const increment = end / 100;
    const stepTime = Math.abs(Math.floor(duration / 100));

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center card-hover">
      <div className="text-4xl font-bold text-innocom-600 mb-2">
        <span ref={countRef}>{count}</span>
        {suffix}
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default StatCard;
