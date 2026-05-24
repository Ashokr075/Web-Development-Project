// Fade-in
const faders=document.querySelectorAll('.fade-in');
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add('show'));
});
faders.forEach(f=>obs.observe(f));

// Skill bars
document.querySelectorAll('.bar').forEach(bar=>{
  setTimeout(()=>bar.style.width=bar.dataset.level+'%',600);
});

// Theme toggle
themeToggle.onclick=()=>document.body.classList.toggle('light');

// Particles
const c=document.getElementById('particles');
const ctx=c.getContext('2d');
c.width=innerWidth; c.height=innerHeight;
let p=Array.from({length:80},()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  vx:(Math.random()-.5),
  vy:(Math.random()-.5)
}));
(function anim(){
  ctx.clearRect(0,0,c.width,c.height);
  p.forEach(o=>{
    o.x+=o.vx; o.y+=o.vy;
    ctx.fillStyle='rgba(56,189,248,.6)';
    ctx.beginPath(); ctx.arc(o.x,o.y,2,0,Math.PI*2); ctx.fill();
  });
  requestAnimationFrame(anim);
})();

// Modals
function openModal(id){document.getElementById(id).style.display='flex'}
function closeModal(id){document.getElementById(id).style.display='none'}
