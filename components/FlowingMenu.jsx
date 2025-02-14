import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FlowingMenu.css';

const FlowingMenu = ({ items }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu__item');
    
    menuItems.forEach((item) => {
      const marqueeInner = item.querySelector('.marquee__inner');
      const link = item.querySelector('.menu__item-link');
      const marquee = item.querySelector('.marquee');
      
      link.addEventListener('mouseenter', () => {
        gsap.to(marquee, {
          y: '0%',
          duration: 0.6,
          ease: 'expo.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(marquee, {
          y: '101%',
          duration: 0.6,
          ease: 'expo.out'
        });
      });
    });
  }, [items]);

  return (
    <nav className="menu-wrap" ref={menuRef}>
      <div className="menu">
        {items.map((item, index) => (
          <div className="menu__item" key={index}>
            <a className="menu__item-link" href={item.link}>
              {item.text}
            </a>
            <div className="marquee">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner" aria-hidden="true">
                  {Array(10).fill(null).map((_, i) => (
                    <React.Fragment key={i}>
                      <span>{item.text}</span>
                      <div 
                        className="marquee__img" 
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FlowingMenu; 