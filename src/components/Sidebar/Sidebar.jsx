import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import './sidebar.css';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [parallaxY, setParallaxY] = useState(0);
  const [{ y }, setY] = useSpring(() => ({ y: 0 }));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (event) => {
        const mouseYPercent = event.clientY / window.innerHeight;
        const mouseOffset = (mouseYPercent - 0.5) * 2 * 13;
        setParallaxY(mouseOffset);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);
  const handlers = useSwipeable({
    onSwipedDown: () => isMobile && setIsOpen(true),
    onSwipedUp: () => isMobile && setIsOpen(false),
    onSwiping: (eventData) => {
      if (isMobile) {
        const dragLimit = 50;
        const dragProgress = Math.min(eventData.deltaY, dragLimit);
        setY({ y: dragProgress });
      }
    },
    onSwiped: () => {
      if (isMobile) {
        setY({ y: 0 });
      }
    },
    trackMouse: false,
  });
  return (
    <animated.div
      {...handlers}
      className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}
      style={{
        transform: y.to((y) => `translateY(${isOpen ? 0 : '0'}) translateY(${y}px)`),
        backgroundPosition: `50% calc(50% + ${parallaxY}px)`,
      }}
    >
			<div className="sidebar-content">
				<div className="summary">
					<h1>Hi, I'm Sander. <span>This is my portfolio.</span></h1>
					<img
						src="https://i.imgur.com/Wf8z2Ky.png"
						alt="This is me"
						className="center-image"
					/>
					<p>
						I'm a musician and a developer with a passion for creative thinking and problem solving.
					</p>
				</div>
				<div className="footer">
					<span>&copy;2024 <br /> Sander v handeland.</span>
				</div>
			</div>
		</animated.div>
	);
}
export default Sidebar;
