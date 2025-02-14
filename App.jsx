import React, { useState } from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import Dock from './components/Dock';
import LetterGlitch from './components/LetterGlitch';
import BlurText from './components/BlurText';
import RotatingText from './components/RotatingText';
import FallingText from './components/FallingText';
import FlowingMenu from './components/FlowingMenu';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [glitchSpeed, setGlitchSpeed] = useState(50);

  const handleAnimationComplete = () => {
    console.log('Text animation completed!');
  };

  const skills = [
    'Full Stack Development',
    'iOS Development',
    'AI/ML Engineering',
    'React & React Native',
    'Python & TensorFlow',
    'Node.js & Express',
    'Swift & SwiftUI',
    'MongoDB & SQL',
  ];

  const highlightedTech = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'Swift',
    'iOS', 'AI', 'ML', 'MongoDB', 'SQL', 'Express'
  ];

  const handleNavigation = (section) => {
    setActiveSection(section);
    // Add smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSettings = () => {
    // Toggle glitch speed as a test of settings functionality
    setGlitchSpeed(prev => prev === 50 ? 20 : 50);
  };

  const items = [
    { 
      icon: <VscHome size={32} color="#ffffff" />, 
      label: 'Home', 
      onClick: () => handleNavigation('home')
    },
    { 
      icon: <VscArchive size={32} color="#ffffff" />, 
      label: 'Projects', 
      onClick: () => handleNavigation('projects')
    },
    { 
      icon: <VscAccount size={32} color="#ffffff" />, 
      label: 'About', 
      onClick: () => handleNavigation('about')
    },
    { 
      icon: <VscSettingsGear size={32} color="#ffffff" />, 
      label: 'Settings', 
      onClick: handleSettings
    },
  ];

  const menuItems = [
    { 
      text: 'Home', 
      link: '#home', 
      image: 'https://picsum.photos/600/400?random=1' 
    },
    { 
      text: 'Projects', 
      link: '#projects', 
      image: 'https://picsum.photos/600/400?random=2' 
    },
    { 
      text: 'About', 
      link: '#about', 
      image: 'https://picsum.photos/600/400?random=3' 
    },
    { 
      text: 'Contact', 
      link: '#contact', 
      image: 'https://picsum.photos/600/400?random=4' 
    }
  ];

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Add the menu at the top */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        width: '200px', 
        height: '400px', 
        zIndex: 100 
      }}>
        <FlowingMenu items={menuItems} />
      </div>

      {/* Hero Section */}
      <section id="home" style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0 
        }}>
          <LetterGlitch
            glitchSpeed={glitchSpeed}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        
        <div style={{ 
          position: 'relative', 
          zIndex: 1,
          padding: '2rem',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <BlurText
            text="Hi, I'm Yaduraj Singh"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-6xl font-bold"
            onAnimationComplete={handleAnimationComplete}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span className="text-2xl text-gray-300">I'm a</span>
            <RotatingText
              texts={skills}
              mainClassName="px-3 py-1 bg-white/10 text-white rounded-lg backdrop-blur-sm border border-white/20"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div style={{ height: '200px', marginTop: '2rem' }}>
            <FallingText
              text="Passionate about creating innovative solutions using cutting-edge technologies including React Node.js Python TensorFlow Swift iOS AI ML MongoDB SQL Express"
              highlightWords={highlightedTech}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.3}
              fontSize="1.25rem"
              mouseConstraintStiffness={0.6}
            />
          </div>
          
          <BlurText
            text="Crafting digital experiences with code and creativity"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-xl text-gray-400"
          />

          <div style={{
            marginTop: '1rem',
            fontSize: '0.875rem',
            opacity: 0.6
          }}>
            Active Section: {activeSection} | Glitch Speed: {glitchSpeed}ms
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a1a',
        color: '#fff'
      }}>
        <h2>Projects Section</h2>
      </section>

      {/* About Section */}
      <section id="about" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f0f0f',
        color: '#fff'
      }}>
        <h2>About Section</h2>
      </section>

      {/* Dock */}
      <Dock 
        items={items}
        panelHeight={90}
        baseItemSize={70}
        magnification={100}
        distance={100}
      />
    </div>
  );
}

export default App; 