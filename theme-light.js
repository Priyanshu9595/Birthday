const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(componentsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Text colors
  content = content.replace(/text-white/g, 'text-[#4A0E4E]');
  content = content.replace(/text-lavender/g, 'text-[#6B4E71]');
  content = content.replace(/text-rose/g, 'text-[#4A0E4E]');
  
  // Background colors
  content = content.replace(/bg-\[#2a0e21\]/g, 'bg-white');
  content = content.replace(/bg-black\/80/g, 'bg-white/80');
  content = content.replace(/bg-black\/40/g, 'bg-white/60');
  content = content.replace(/to-\[#2a0e21\]/g, 'to-[#FFE4E8]');
  
  // Fix Surprise modal overlay contrast (white/10 on light bg is invisible, make it white/80)
  content = content.replace(/bg-white\/10 backdrop-blur-md/g, 'bg-white/80 backdrop-blur-md');
  
  fs.writeFileSync(filePath, content);
});

// Also update Hero.jsx gradient
const heroPath = path.join(componentsDir, 'Hero.jsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(/to-\[#2a0e21\]/g, 'to-[#FFE4E8]');
fs.writeFileSync(heroPath, heroContent);

console.log('Theme changed to light mode in components!');
