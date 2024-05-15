const COLORS = ['#fff2', '#fff4', '#fff8', '#fffc']
const ganerateSpaceLayer = (size, selector, totalStar, duration) => {
  const layer = [];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  
  for(let i = 0; i < totalStar; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`)
    
  }
  const container = document.querySelector(selector);
  
  container.style.setProperty('--space-layer', layer.join(','));
  container.style.setProperty('--size', size);
  container.style.setProperty('--duration', duration);
};

ganerateSpaceLayer("1px",'.space-1', 250, "30s");
ganerateSpaceLayer("2px",'.space-2', 100, "15s");
ganerateSpaceLayer("4px",'.space-3', 25, '10s');