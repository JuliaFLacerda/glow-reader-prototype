import { useState } from 'react';

function Line({ text, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`line ${isHovered ? 'illuminate' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}

export default Line;