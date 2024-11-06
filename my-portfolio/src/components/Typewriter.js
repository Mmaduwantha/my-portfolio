import React, { useEffect, useState } from 'react';

const texts = ["DEVELOPER", "YOUTUBER"];

function Typewriter() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      } else {
        setText((prev) => texts[index].slice(0, prev.length + 1));
        if (text === texts[index]) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typingInterval = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, index]);

  return <span className="typewriter-text">{text}</span>;
}

export default Typewriter;
