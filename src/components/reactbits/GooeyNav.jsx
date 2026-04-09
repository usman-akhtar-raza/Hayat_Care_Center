"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

const getNoise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance, pointIndex, totalPoints) => {
  const angle = ((360 + getNoise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (i, t, distances, radius, count, colors) => {
  const rotate = getNoise(radius / 10);
  return {
    start: getXY(distances[0], count - i, count),
    end: getXY(distances[1] + getNoise(7), count - i, count),
    time: t,
    scale: 1 + getNoise(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: rotate > 0 ? (rotate + radius / 20) * 10 : (rotate - radius / 20) * 10
  };
};

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex = -1,
  ariaLabel = 'Primary',
  onItemEnter,
  onItemFocus,
  onItemActivate,
  onNavMouseLeave,
  className = '',
  style = undefined
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(initialActiveIndex);
  const currentIndex = typeof activeIndex === 'number' ? activeIndex : activeItemIndex;

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + getNoise(timeVariance * 2);
      const p = createParticle(i, t, d, r, particleCount, colors);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (currentIndex === index) return;

    setActiveItemIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[currentIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[currentIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [currentIndex]);

  return (
    <div className={`gooey-nav-container ${className}`.trim()} ref={containerRef} style={style}>
      <nav aria-label={ariaLabel} onMouseLeave={onNavMouseLeave}>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={item.href ?? index} className={currentIndex === index ? 'active' : ''}>
              {item.href?.startsWith('http') || item.href?.startsWith('mailto:') || item.href?.startsWith('tel:') ? (
                <a
                  href={item.href}
                  aria-current={currentIndex === index ? 'page' : undefined}
                  onMouseEnter={e => onItemEnter?.(item, index, e)}
                  onFocus={e => onItemFocus?.(item, index, e)}
                  onClick={e => {
                    onItemActivate?.(item, index, e);
                    handleClick(e, index);
                  }}
                  onKeyDown={e => handleKeyDown(e, index)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  aria-current={currentIndex === index ? 'page' : undefined}
                  onMouseEnter={e => onItemEnter?.(item, index, e)}
                  onFocus={e => onItemFocus?.(item, index, e)}
                  onClick={e => {
                    onItemActivate?.(item, index, e);
                    handleClick(e, index);
                  }}
                  onKeyDown={e => handleKeyDown(e, index)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
