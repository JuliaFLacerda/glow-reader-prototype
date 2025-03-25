import './App.css';
import { useState, useEffect } from 'react';
import somegif from './assets/somegif.gif';
import openinggif from './assets/openinggif.gif';
import Background from './components/Background';
import Effects from './components/Effects';
import Menu from './components/Menu';
import TextDisplay from './components/TextDisplay';
import Opening from './components/Opening';

function App() {
  const pages = [
    {
      chinese: `
        女は退屈で色っぽい妖婦で、ふかふかのソファに横たわり、長い脚を伸ばして足首を交差させている。彼女は、官能的な曲線美をほとんど覆い隠すことのない、短い絹のようなローブを身にまとっている。彼女の髪は顔の周りを緩やかに波打って落ちている。彼女は怠惰に煙を空中に吹き出し、目は半分閉じて重い瞼をしている。

男はハンサムで筋肉質な体つきで、彼女の足元にひざまずき、目を足に向けている。彼女はつま先で彼をからかい、セクシーにくねらせながら、煙草を深く吸い込む。彼は前に身を乗り出し、顔を彼女の足元に近づけ、煙を吸い込みながら彼女の香りを嗅ぐ。

「気に入ったでしょ？あなたは私の足が好きなんでしょ？」と彼女は喉を鳴らし、低い、かすれた声で言う。

彼はうなずき、言葉を発することができず、目は彼女の足から離れない。

彼女はゆっくりと、彼の心を躍らせるような笑みを浮かべる。「それなら、もっと気に入るわよ」

彼女は足を上げ、つま先から滑り出るように靴を脱ぎ、完璧にマニキュアを施したつま先をあらわにする。ゆっくりとした動きで、彼女は裸足を彼の肩に置き、足の裏を彼の肌に押し付ける。彼の体は触れられたことで震え、彼女の足の温もりが体中に快感の衝撃を送り込む。

「んんっ」と彼女は、感覚を味わうように、かすかにうめく。「そう、私の足を崇拝して」
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
        彼は彼女のつま先を一つずつキスし始め、敬意を込めて唇でそれぞれの指を愛撫する。彼女は後ろに身を引いて背中を少し反らせ、彼に足を口で愛撫させる。彼女の目は閉じられ、彼が大きなつま先を優しく吸うと、彼女の唇から柔らかなうめき声が漏れる。

「そう、そこよ...」と彼女は、彼を励ますようにささやく。

彼の手が彼女のふくらはぎを這い上がり、指が滑らかな肌をなぞり、彼の触れ方は彼女の脚を震わせる。彼女は足を広げ、彼にアクセスしやすくする。彼は足首にキスを移し、舌で敏感な肌に模様を描いていく。

「ああ、あなたはとても上手ね」と彼女は、欲望に満ちた声で息を吐く。「今度は、もう片方の靴を脱がして」

彼は震える手で従い、もう片方の靴を脱がし、もう片方の足を露出させる。彼女はつま先を曲げ、彼は一つずつ口に含み、情熱的に吸い、キスをする。

彼が彼女の足を崇拝している間、彼女は手を伸ばし、彼の髪に指を走らせ、彼を促す。彼女の呼吸はますます速くなり、胸は息をするたびに上下する。彼女はもっと欲しいと、彼は知っている。

彼は彼女を見上げ、欲望に暗い目でささやく。「何が欲しいか言ってごらん」

「あなたが欲しいの...」と彼女は、必要に満ちた声で言う。「私に全身で感じさせて欲しいの」

彼は、期待に満ちた緊張した体で立ち上がる。素早い動きで彼女を抱き上げ、腕に抱きかかえ、寝室へと運ぶ。女の笑い声が、喜びと期待の混ざった音色で響き渡る。

「あなたは私に感じさせてくれるんでしょ？」と彼女は、いたずらっぽい目で尋ねる。

彼は、喜びを約束する悪戯な笑みを浮かべる。「どこでも」と彼は、深く、力強い声で言う。

そして、官能的な妖婦と筋肉質な男は、彼女のつま先から唇まで、崇拝され、愛される情熱の夜へと旅立つのであった。
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

  const handleEffectChange = (newEffect) => {
    setEffect(newEffect);
    if (newEffect !== 'none') setEffectKey(prev => prev + 1);
  };

  const toggleLanguage = () => setLanguage(prev => (prev === 'chinese' ? 'english' : 'chinese'));

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      if (pageAnimation === 'gif-transition') {
        setShowGifTransition(true);
        setTimeout(() => {
          setShowGifTransition(false);
          setCurrentPage(prev => prev + 1);
          setCurrentLineIndex(0);
        }, 1000);
      } else {
        setCurrentPage(prev => prev + 1);
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
          setCurrentPage(prev => prev - 1);
          setCurrentLineIndex(0);
        }, 1000);
      } else {
        setCurrentPage(prev => prev - 1);
        setCurrentLineIndex(0);
      }
    }
  };

  const toggleVisualNovelMode = () => {
    setVisualNovelMode(prev => !prev);
    setCurrentLineIndex(0);
  };

  const toggleOpeningEnabled = () => {
    setOpeningEnabled(prev => !prev);
    if (!openingEnabled) setShowOpening(true);
  };

  const skipOpening = () => setShowOpening(false);

  const handleOpeningEnd = () => setShowOpening(false);

  const nextLine = () => {
    const displayText = language === 'chinese' ? pages[currentPage].chinese : pages[currentPage].english;
    const allLines = displayText.flatMap(paragraph => 
      paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'))
    );
    if (visualNovelMode) {
      if (currentLineIndex < allLines.length - 1) {
        setCurrentLineIndex(prev => prev + 1);
      } else if (currentPage < pages.length - 1) {
        if (pageAnimation === 'gif-transition') {
          setShowGifTransition(true);
          setTimeout(() => {
            setShowGifTransition(false);
            setCurrentPage(prev => prev + 1);
            setCurrentLineIndex(0);
          }, 1000);
        } else {
          setCurrentPage(prev => prev + 1);
          setCurrentLineIndex(0);
        }
      }
    }
  };

  const goBack = () => {
    const displayText = language === 'chinese' ? pages[currentPage].chinese : pages[currentPage].english;
    const allLines = displayText.flatMap(paragraph => 
      paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'))
    );
    if (visualNovelMode) {
      if (currentLineIndex > 0) {
        setCurrentLineIndex(prev => prev - 1);
      } else if (currentPage > 0) {
        if (pageAnimation === 'gif-transition') {
          setShowGifTransition(true);
          setTimeout(() => {
            setShowGifTransition(false);
            setCurrentPage(prev => prev - 1);
            setCurrentLineIndex(pages[currentPage - 1][language].flatMap(p => p.trim().split('. ')).length - 1);
          }, 1000);
        } else {
          setCurrentPage(prev => prev - 1);
          setCurrentLineIndex(pages[currentPage - 1][language].flatMap(p => p.trim().split('. ')).length - 1);
        }
      }
    }
  };

  return (
    <div className={`app ${effect.includes('frozen') ? 'frozen' : ''} ${effect.includes('heat') ? 'heat' : ''} ${effect.includes('pinkish') ? 'pinkish' : ''} ${effect.includes('mist') ? 'mist' : ''}`}>
      <Opening 
        showOpening={showOpening} 
        openingEnabled={openingEnabled} 
        onSkip={skipOpening} 
        onEnd={handleOpeningEnd} 
      />
      {!showOpening && (
        <>
          <Background 
            type={backgroundType} 
            color={backgroundColor} 
            onError={() => {
              console.error("Failed to load Bodhisattva image. Switching to fallback color.");
              setBackgroundType('color');
            }} 
          />
          <Effects effect={effect} effectKey={effectKey} />
          {showGifTransition && pageAnimation === 'gif-transition' && (
            <div className="gif-transition">
              <img src={somegif} alt="Transition GIF" className="gif-image" />
            </div>
          )}
          <Menu 
            isOpen={isMenuOpen} 
            toggleMenu={() => setIsMenuOpen(prev => !prev)}
            backgroundType={backgroundType}
            setBackgroundType={setBackgroundType}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            textColor={textColor}
            setTextColor={setTextColor}
            effect={effect}
            handleEffectChange={handleEffectChange}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            visualNovelMode={visualNovelMode}
            toggleVisualNovelMode={toggleVisualNovelMode}
            pageAnimation={pageAnimation}
            setPageAnimation={setPageAnimation}
            openingEnabled={openingEnabled}
            toggleOpeningEnabled={toggleOpeningEnabled}
            backgroundOptions={backgroundOptions}
            effectOptions={effectOptions}
            fontOptions={fontOptions}
            animationOptions={animationOptions}
          />
          <button className="translate-button" onClick={toggleLanguage}>
            {language === 'chinese' ? 'Translate to English' : 'Translate to Chinese'}
          </button>
          <TextDisplay 
            pages={pages}
            currentPage={currentPage}
            language={language}
            visualNovelMode={visualNovelMode}
            currentLineIndex={currentLineIndex}
            textColor={textColor}
            selectedFont={selectedFont}
            pageAnimation={pageAnimation}
            nextPage={nextPage}
            prevPage={prevPage}
            nextLine={nextLine}
            goBack={goBack}
          />
        </>
      )}
    </div>
  );
}

export default App;