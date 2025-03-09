import React, { useEffect, useState } from 'react';

export default function About() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I am a Full Stack Java Developer passionate about building impactful web applications.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <section className="py-16 bg-white" id="about">
        <div className="max-w-4xl mx-auto px-4 text-center opacity-0 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl font-mono text-gray-600 mb-8">
            {typedText}
          </p>
          <p className="text-xl font-mono text-gray-600 mb-8 animate-slideIn">
            I love transforming ideas into functional applications and solving challenges along the way.
          </p>
          <p className="text-xl font-mono text-gray-600 animate-slideIn">
            Collaboration inspires me, and I enjoy working with others to create meaningful solutions.
          </p>
        </div>
      </section>
    </div>
  );
}