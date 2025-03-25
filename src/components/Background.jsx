
import bb from '../assets/bb.jpg';

function Background({ type, color, onError }) {
  return type === 'image' ? (
    <div className="image-container">
      <img
        src={bb}
        alt="Q"
        className="background-image"
        onError={onError}
      />
      <div className="overlay"></div>
    </div>
  ) : (
    <div className="color-background" style={{ backgroundColor: color }}></div>
  );
}

export default Background;