function Effects({ effect, effectKey }) {
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
  
    const isSnow = effect.includes('snow') && !effect.includes('heat') && !effect.includes('pinkish');
    const isLeaves = effect.includes('leaves') && !effect.includes('heat') && !effect.includes('pinkish');
    const isMist = effect.includes('mist');
    const hasWind = effect.includes('wind') && !effect.includes('heat') && !effect.includes('pinkish');
    const showParticles = isSnow || isLeaves || isMist;
  
    return showParticles ? (
      <div className="particle-wrapper" key={`effect-${effectKey}`}>
        {(isSnow || isLeaves ? particles : mistParticles).map((particle) => (
          <div
            key={particle.key}
            className={`particle ${isSnow ? 'snow' : isLeaves ? 'leaf' : isMist ? 'mist' : ''} ${hasWind ? 'wind' : ''}`}
            style={particle.style}
          />
        ))}
      </div>
    ) : null;
  }
  
  export default Effects;