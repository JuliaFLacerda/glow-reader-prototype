import Line from './Line';

function TextDisplay({
  pages, currentPage, language, visualNovelMode, currentLineIndex, textColor, selectedFont,
  pageAnimation, nextPage, prevPage, nextLine, goBack
}) {
  const displayText = language === 'chinese' ? pages[currentPage].chinese : pages[currentPage].english;
  const allLines = displayText.flatMap(paragraph => 
    paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'))
  );

  return visualNovelMode ? (
    <div className="visual-novel-box">
      <span className="visual-novel-text" style={{ color: textColor, fontFamily: selectedFont }}>
        {allLines[currentLineIndex]}
      </span>
      <div className="visual-novel-buttons">
        <button className="go-back-button" onClick={goBack}>Go Back</button>
        <button className="next-line-button" onClick={nextLine}>Next</button>
      </div>
    </div>
  ) : (
    <div 
      className={`text-container ${pageAnimation !== 'none' && pageAnimation !== 'gif-transition' ? `animate-${pageAnimation}` : ''}`} 
      style={{ color: textColor, fontFamily: selectedFont }}
      key={`page-${currentPage}`}
    >
      {displayText.map((paragraph, paraIndex) => {
        const lines = paragraph.trim().split('. ').map(line => line + (line.endsWith('.') ? '' : '.'));
        return (
          <div key={paraIndex} className="paragraph">
            {lines.map((line, lineIndex) => (
              <Line key={`${paraIndex}-${lineIndex}`} text={line} index={paraIndex * 10 + lineIndex} />
            ))}
          </div>
        );
      })}
      <div className="pagination-buttons">
        {currentPage > 0 && <button className="prev-page-button" onClick={prevPage}>Previous Page</button>}
        {currentPage < pages.length - 1 && <button className="next-page-button" onClick={nextPage}>Next Page</button>}
      </div>
    </div>
  );
}

export default TextDisplay;