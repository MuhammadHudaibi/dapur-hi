// File: dapur-hi-dev/src/hooks/useAnimateOnScroll.js

import { useEffect, useRef } from 'react';

const useAnimateOnScroll = () => {
  const elementRef = useRef(null); // Kita akan gunakan ref ini untuk menunjuk ke elemen JSX

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen masuk ke viewport
        if (entry.isIntersecting) {
          // Tambahkan kelas 'is-visible' untuk memicu animasi CSS
          entry.target.classList.add('is-visible');
          // Setelah animasi terjadi sekali, kita tidak perlu mengamatinya lagi
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Picu animasi saat 10% elemen terlihat
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function untuk berhenti mengamati saat komponen hancur
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // [] memastikan efek ini hanya berjalan sekali

  return elementRef; // Kembalikan ref agar bisa ditempelkan ke elemen JSX
};

export default useAnimateOnScroll;