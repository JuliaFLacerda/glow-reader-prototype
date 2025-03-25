import openinggif from '../assets/openinggif.gif';

function Opening({ showOpening, openingEnabled, onSkip, onEnd }) {
  return showOpening && openingEnabled ? (
    <div className="opening-container">
      <img
        src={openinggif}
        alt="Opening Animation"
        className="opening-gif"
        onLoad={() => setTimeout(onEnd, 5000)}
      />
      <button className="skip-button" onClick={onSkip}>Skip</button>
    </div>
  ) : null;
}

export default Opening;