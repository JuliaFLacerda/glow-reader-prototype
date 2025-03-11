import './App.css';
import { useState, useEffect } from 'react';
import buddha from './assets/buddha.jpg';
import somegif from './assets/somegif.gif';
import openinggif from './assets/openinggif.gif';

function App() {
  const pages = [
    {
      chinese: `
        这是善于行善并了解和平之道者应当遵循的：
        让他们端正而正直，言语直率而温和，谦逊而不自负，知足而易满足。
        让他们不做任何哪怕最微小的事情，以至于智者日后会加以责备。

        愿所有众生在喜悦与安稳中，得享安宁。
        无论何种众生——无论强弱，无一遗漏，无论伟大或强大、中等、短小，
        无论可见或不可见，居近或远，已生或未生——愿一切众生皆得安宁。

        愿无人欺骗他人，亦不轻视任何众生。
        愿无人因愤怒或恶意而希望他人受害。

        如同慈母以生命护佑其子，其独子，
        亦应以无量之心珍爱一切众生，
        慈爱之光遍照整个世界——
        向上及于苍穹，向下达于深渊，向外无限蔓延，
        超越一切仇恨与恶意，自在无碍。
      `.trim().split('\n\n'),
      english: `
        This is what should be done by one who is skilled in goodness and who knows the path of peace:
        Let them be upright and straightforward, gentle in speech and humble, not conceited, content and easily satisfied.
        Let them not do the slightest thing that the wise would later reprove.

        May all beings be happy and secure, may they be at peace.
        Whatever living beings there may be—whether weak or strong, without exception, whether great or mighty, medium, short, or small,
        whether seen or unseen, living near or far, born or yet to be born—may all beings be at peace.

        Let none deceive another, nor despise any being in any state.
        Let none, through anger or hatred, wish harm upon another.

        As a mother protects her child, her only child, with her life,
        so too should one cultivate a boundless heart toward all beings,
        radiating loving-kindness throughout the entire world—
        upward to the skies, downward to the depths, outward and unbounded,
        free from hatred and ill-will, unobstructed and at ease.
      `.trim().split('\n\n')
    },
    {
      chinese: `
        修习正念之人，应常观自身，
        以智慧之光照亮内心深处。
        彼当远离贪欲、嗔恚与痴迷，
        于一切时中保持清醒与平静。

        愿彼心无挂碍，无有恐怖，
        自在解脱一切烦恼之缚。
        如清净之莲花，生于淤泥而不染，
        愿彼亦如是，于世而不染世。

        一切法无常，皆因缘而生，
        观此无常者，心得寂静。
        若能如是行，彼即近菩提，
        步步趋向无上正等正觉。
      `.trim().split('\n\n'),
      english: `
        One who practices mindfulness should constantly observe themselves,
        illuminating the depths of the heart with the light of wisdom.
        They should abandon greed, anger, and delusion,
        maintaining clarity and calm in all moments.

        May their mind be free from obstruction, without fear,
        liberated from the bonds of all afflictions.
        Like a pure lotus flower, born in mud yet unstained,
        may they too abide in the world without being tainted by it.

        All phenomena are impermanent, arising from causes and conditions,
        one who contemplates this impermanence finds peace in the heart.
        If one can practice thus, they draw near to enlightenment,
        step by step approaching supreme, perfect awakening.
      `.trim().split('\n\n')
    }
  ];

  const [backgroundType, setBackgroundType] = useState('image');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#ffffff');
  const [effect, setEffect] = useState('none');
  const [effectKey, setEffectKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('chinese');
  const [selectedFont, setSelectedFont] = useState('Playfair Display');
  const [currentPage, setCurrentPage] = useState(0);
  const [visualNovelMode, setVisualNovelMode] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [pageAnimation, setPageAnimation] = useState('none');
  const [showGifTransition, setShowGifTransition] = useState(false);
  const [openingEnabled, setOpeningEnabled] = useState(true);
  const [showOpening, setShowOpening] = useState(true);

  const backgroundOptions = [
    { name: 'Image (Default)', value: 'image' },
    { name: 'Beautiful Red', value: '#8B0000' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
  ];

  const effectOptions = [
    { name: 'None', value: 'none' },
    { name: 'Snow', value: 'snow' },
    { name: 'Snow with Wind', value: 'snow-wind' },
    { name: 'Leaves', value: 'leaves' },
    { name: 'Leaves with Wind', value: 'leaves-wind' },
    { name: 'Mist', value: 'mist' },
    { name: 'Frozen', value: 'frozen' },
    { name: 'Frozen with Snow', value: 'frozen-snow' },
    { name: 'Frozen with Snow and Wind', value: 'frozen-snow-wind' },
    { name: 'Frozen with Leaves', value: 'frozen-leaves' },
    { name: 'Frozen with Leaves and Wind', value: 'frozen-leaves-wind' },
    { name: 'Heat', value: 'heat' },
    { name: 'Pinkish', value: 'pinkish' },
    { name: 'Pinkish with Mist', value: 'pinkish-mist' },
  ];

  const fontOptions = [
    { name: 'Playfair Display', value: 'Playfair Display' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Open Sans', value: 'Open Sans' },
    { name: 'Lora', value: 'Lora' },
    { name: 'Montserrat', value: 'Montserrat' },
  ];

  const animationOptions = [
    { name: 'None', value: 'none' },
    { name: 'Fade', value: 'fade' },
    { name: 'Slide Left', value: 'slide-left' },
    { name: 'Slide Right', value: 'slide-right' },
    { name: 'Zoom', value: 'zoom' },
    { name: 'GIF Transition', value: 'gif-transition' },
  ];

  useEffect(() => {
    if (showOpening && openingEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showOpening, openingEnabled]);

  const handleImageError = () => {
    console.error("Failed to load Bodhisattva image. Switching to fallback color.");
    setBackgroundType('color');
  };

  const particles = Array.from({ length: 50 }, (_, index) => ({
    key: index,
    style: {
      '--random-top': `${Math.random() * 100}vh`,
      '--random-left': `${Math.random() * 100}vw`,
      '--random-delay': `${Math.random() * 10}s`,
      '--random-duration': `${10 + Math.random() * 5}s`,
      '--random-wind': `${(Math.random() - 0.5) * 20}vw`,
    },
  }));

  const mistParticles = Array.from({ length: 15 }, (_, index) => ({
    key: `mist-${index}`,
    style: {
      '--random-top': `${Math.random() * 100 + 50}vh`,
      '--random-left': `${Math.random() * 100}vw`,
      '--random-delay': `${Math.random() * 15}s`,
      '--random-duration': `${20 + Math.random() * 10}s`,
      '--random-wind': `${(Math.random() - 0.5) * 50}px`,
    },
  }));

  const handleEffectChange = (newEffect) => {
    setEffect(newEffect);
    if (newEffect !== 'none') {
      setEffectKey((prev) => prev + 1);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'chinese' ? 'english' : 'chinese'));
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      if (pageAnimation === 'gif-transition') {
        setShowGifTransition(true);
        setTimeout(() => {
          setShowGifTransition(false);
          setCurrentPage((prev) => prev + 1);
          setCurrentLineIndex(0);
        }, 1000);
      } else {
        setCurrentPage((prev) => prev + 1);
        setCurrentLineIndex(0);
      }
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      if (pageAnimation === 'gif-transition') {
        setShowGifTransition(true);
        setTimeout(() => {
          setShowGifTransition(false);
          setCurrentPage((prev) => prev - 1);
          setCurrentLineIndex(0);
        }, 1000);
      } else {
        setCurrentPage((prev) => prev - 1);
        setCurrentLineIndex(0);
      }
    }
  };

  const toggleVisualNovelMode = () => {
    setVisualNovelMode((prev) => !prev);
    setCurrentLineIndex(0);
  };

  const toggleOpeningEnabled = () => {
    setOpeningEnabled((prev) => !prev);
    if (!openingEnabled) {
      setShowOpening(true);
    }
  };

  const skipOpening = () => {
    setShowOpening(false);
  };

  const handleOpeningEnd = () => {
    setShowOpening(false);
  };

  const goBack = () => {
    if (visualNovelMode) {
      if (currentLineIndex < allLines.length - 1) {
        setCurrentLineIndex((prev) => prev + 1); // Move forward
      } else if (currentPage < pages.length - 1) {
        if (pageAnimation === 'gif-transition') {
          setShowGifTransition(true);
          setTimeout(() => {
            setShowGifTransition(false);
            setCurrentPage((prev) => prev + 1);
            setCurrentLineIndex(0);
          }, 1000);
        } else {
          setCurrentPage((prev) => prev + 1);
          setCurrentLineIndex(0);
        }
      }
    }
  };

  const nextLine = () => {
    if (visualNovelMode) {
      if (currentLineIndex < allLines.length - 1) {
        setCurrentLineIndex((prev) => prev + 1); // Move to next line
      } else if (currentPage < pages.length - 1) {
        if (pageAnimation === 'gif-transition') {
          setShowGifTransition(true);
          setTimeout(() => {
            setShowGifTransition(false);
            setCurrentPage((prev) => prev + 1);
            setCurrentLineIndex(0);
          }, 1000);
        } else {
          setCurrentPage((prev) => prev + 1);
          setCurrentLineIndex(0);
        }
      }
    }
  };

  const displayText = language === 'chinese' ? pages[currentPage].chinese : pages[currentPage].english;
  const allLines = displayText.flatMap(paragraph => 
    paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'))
  );

  const isSnow = effect.includes('snow') && !effect.includes('heat') && !effect.includes('pinkish');
  const isLeaves = effect.includes('leaves') && !effect.includes('heat') && !effect.includes('pinkish');
  const isMist = effect.includes('mist');
  const hasWind = effect.includes('wind') && !effect.includes('heat') && !effect.includes('pinkish');
  const isFrozen = effect.includes('frozen');
  const isHeat = effect.includes('heat');
  const isPinkish = effect.includes('pinkish');
  const showParticles = (isSnow || isLeaves || isMist);

  return (
    <div className={`app ${isFrozen ? 'frozen' : ''} ${isHeat ? 'heat' : ''} ${isPinkish ? 'pinkish' : ''} ${isMist ? 'mist' : ''}`}>
      {showOpening && openingEnabled ? (
        <div className="opening-container">
          <img
            src={openinggif}
            alt="Opening Animation"
            className="opening-gif"
            onLoad={() => {
              setTimeout(handleOpeningEnd, 5000);
            }}
          />
          <button className="skip-button" onClick={skipOpening}>
            Skip
          </button>
        </div>
      ) : (
        <>
          {backgroundType === 'image' ? (
            <div className="image-container">
              <img
                src={buddha}
                alt="Bodhisattva Avalokiteshvara (Guanyin)"
                className="background-image"
                onError={handleImageError}
              />
              <div className="overlay"></div>
            </div>
          ) : (
            <div className="color-background" style={{ backgroundColor }}></div>
          )}
          {showParticles && (
            <div className="particle-wrapper" key={`effect-${effectKey}`}>
              {particles.map((particle) => (
                <div
                  key={particle.key}
                  className={`particle ${
                    isSnow ? 'snow' : 
                    isLeaves ? 'leaf' : 
                    isMist ? 'mist' : ''
                  } ${hasWind ? 'wind' : ''}`}
                  style={particle.style}
                />
              ))}
            </div>
          )}
          {showGifTransition && pageAnimation === 'gif-transition' && (
            <div className="gif-transition">
              <img src={somegif} alt="Transition GIF" className="gif-image" />
            </div>
          )}
          <div className="menu-container">
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            <div className={`controls ${isMenuOpen ? 'open' : 'closed'}`}>
              <label>Background: </label>
              <select
                value={backgroundType === 'image' ? 'image' : backgroundColor}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'image') {
                    setBackgroundType('image');
                  } else {
                    setBackgroundType('color');
                    setBackgroundColor(value);
                  }
                }}
              >
                {backgroundOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <label>Text Color: </label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
              <label>Effect: </label>
              <select value={effect} onChange={(e) => handleEffectChange(e.target.value)}>
                {effectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <label>Font: </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
              >
                {fontOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <label>Visual Novel Mode: </label>
              <button onClick={toggleVisualNovelMode}>
                {visualNovelMode ? 'Disable' : 'Enable'}
              </button>
              <label>Page Animation: </label>
              <select
                value={pageAnimation}
                onChange={(e) => setPageAnimation(e.target.value)}
              >
                {animationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <label>Opening Enabled: </label>
              <button onClick={toggleOpeningEnabled}>
                {openingEnabled ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
          <button className="translate-button" onClick={toggleLanguage}>
            {language === 'chinese' ? 'Translate to English' : 'Translate to Chinese'}
          </button>
          
          {visualNovelMode ? (
            <div className="visual-novel-box">
              <span 
                className="visual-novel-text"
                style={{ 
                  color: textColor,
                  fontFamily: selectedFont
                }}
              >
                {allLines[currentLineIndex]}
              </span>
              <div className="visual-novel-buttons">
                <button className="go-back-button" onClick={goBack}>
                  Go Back
                </button>
                <button className="next-line-button" onClick={nextLine}>
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div 
              className={`text-container ${pageAnimation !== 'none' && pageAnimation !== 'gif-transition' ? `animate-${pageAnimation}` : ''}`} 
              style={{ 
                color: textColor,
                fontFamily: selectedFont
              }}
              key={`page-${currentPage}`}
            >
              {displayText.map((paragraph, paraIndex) => {
                const lines = paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'));
                return (
                  <div key={paraIndex} className="paragraph">
                    {lines.map((line, lineIndex) => (
                      <Line
                        key={`${paraIndex}-${lineIndex}`}
                        text={line}
                        index={paraIndex * 10 + lineIndex}
                      />
                    ))}
                  </div>
                );
              })}
              <div className="pagination-buttons">
                {currentPage > 0 && (
                  <button className="prev-page-button" onClick={prevPage}>
                    Previous Page
                  </button>
                )}
                {currentPage < pages.length - 1 && (
                  <button className="next-page-button" onClick={nextPage}>
                    Next Page
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

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

export default App;