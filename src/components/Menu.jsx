function Menu({
    isOpen, toggleMenu, backgroundType, setBackgroundType, backgroundColor, setBackgroundColor,
    textColor, setTextColor, effect, handleEffectChange, selectedFont, setSelectedFont,
    visualNovelMode, toggleVisualNovelMode, pageAnimation, setPageAnimation,
    openingEnabled, toggleOpeningEnabled, backgroundOptions, effectOptions, fontOptions, animationOptions
  }) {
    return (
      <div className="menu-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <div className={`controls ${isOpen ? 'open' : 'closed'}`}>
          <label>Background: </label>
          <select
            value={backgroundType === 'image' ? 'image' : backgroundColor}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'image') setBackgroundType('image');
              else { setBackgroundType('color'); setBackgroundColor(value); }
            }}
          >
            {backgroundOptions.map(option => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
          <label>Text Color: </label>
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
          <label>Effect: </label>
          <select value={effect} onChange={(e) => handleEffectChange(e.target.value)}>
            {effectOptions.map(option => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
          <label>Font: </label>
          <select value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
            {fontOptions.map(option => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
          <label>Visual Novel Mode: </label>
          <button onClick={toggleVisualNovelMode}>{visualNovelMode ? 'Disable' : 'Enable'}</button>
          <label>Page Animation: </label>
          <select value={pageAnimation} onChange={(e) => setPageAnimation(e.target.value)}>
            {animationOptions.map(option => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))}
          </select>
          <label>Opening Enabled: </label>
          <button onClick={toggleOpeningEnabled}>{openingEnabled ? 'Disable' : 'Enable'}</button>
        </div>
      </div>
    );
  }
  
  export default Menu;