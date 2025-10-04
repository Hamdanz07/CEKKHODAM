// Core interactions for CEKKHODAM
document.addEventListener('DOMContentLoaded', ()=> {
  // show wrap with fade-in
  document.querySelector('.wrap').classList.add('visible');

  // elements
  const resultStage = document.getElementById('result-stage');
  const resultContainer = document.getElementById('result');

  // helper: pick random
  const pick = arr => arr[Math.floor(Math.random()*arr.length)];

  // dramatic typewriter reveal (for khodam) or simple fade for others
  function dramaticReveal(text, opts = {type:'type', speed:28}) {
    resultStage.classList.remove('visible');
    resultStage.innerHTML = '';
    // small delay to reset transition
    setTimeout(()=>{
      if (opts.type === 'type') {
        // typewriter-like reveal
        const span = document.createElement('div');
        span.className = 'khodam';
        resultStage.appendChild(span);
        let i=0;
        const timer = setInterval(()=>{
          span.textContent += text.charAt(i);
          i++;
          if (i>=text.length) {
            clearInterval(timer);
            // ensure visible class after typing
            resultStage.classList.add('visible');
          }
        }, opts.speed);
      } else {
        // simple fade-in
        const p = document.createElement('div');
        p.textContent = text;
        resultStage.appendChild(p);
        resultStage.classList.add('visible');
      }
    }, 120);
  }

  // lists / small DB
  const khodams = [
    "Angin malam berbisik: 'Jaga hati, pilih yang selaras.'",
    "Ember kecil berisi keberanian—ambil satu, bagikan dua.",
    "Lampu remang menunjuk jalan: dengarkan, lalu bertindak.",
    "Ada warna emas pada niatmu; rawat dan jangan terburu.",
    "Sebuah nama lama membawakanmu ide — tuliskan, lalu lihatlah."
  ];

  const praises = [
    "Senyummu ringan — seperti pagi yang ramah.",
    "Kamu punya selera yang ramah dan berkelas.",
    "Perhatianmu pada detail membuat hal sederhana jadi istimewa.",
    "Kalau ada lomba sopan santun, kamu pasti juara."
  ];

  const icebreakers = [
    "Kalau hidupmu adalah sebuah lagu, judulnya apa?",
    "Aku penasaran: makanan yang mustahil kamu tolak apa ya?",
    "Kalau harus pilih satu superpower sehari, kamu ambil yang mana?",
    "Ada rekomendasi film yang selalu bikin mood naik?"
  ];

  const ideas = [
    "Piknik senja + teh hangat di termos.",
    "Kelas membuat kue singkat, lalu bagi hasil buat teman.",
    "Jelajah mural kota sambil berburu kopi murah enak.",
    "Berburu buku bekas di pasar loak, set goal: satu buku unik."
  ];

  const plans = [
    "Jadwalkan 20 menit jalan santai sore ini — tanpa ponsel.",
    "Siapkan satu surprise kecil untuk teman: catatan tangan.",
    "Coba resep sederhana malam ini: pasta + salad sederhana.",
    "Atur alarm 30 menit lebih awal untuk hari kerja besok — lebih santai."
  ];

  // buttons
  const btnK = document.getElementById('btn-khodam');
  const btnP = document.getElementById('btn-praise');
  const btnI = document.getElementById('btn-ice');
  const btnD = document.getElementById('btn-idea');
  const btnR = document.getElementById('btn-plan');

  // soundless pulse effect on click (visual)
  function clickPulse(el){
    el.animate([
      { transform: 'scale(1)', boxShadow: '0 8px 30px rgba(212,175,55,0.08)' },
      { transform: 'scale(0.98)', boxShadow: '0 6px 22px rgba(212,175,55,0.14)' },
      { transform: 'scale(1)', boxShadow: '0 10px 34px rgba(212,175,55,0.12)' }
    ], { duration:220, easing:'cubic-bezier(.2,.9,.3,1)'});
  }

  btnK.addEventListener('click', e=>{
    clickPulse(e.currentTarget);
    const text = pick(khodams);
    dramaticReveal(text, {type:'type', speed:30});
  });

  btnP.addEventListener('click', e=>{
    clickPulse(e.currentTarget);
    const text = pick(praises);
    dramaticReveal(text, {type:'fade'});
  });

  btnI.addEventListener('click', e=>{
    clickPulse(e.currentTarget);
    const text = pick(icebreakers);
    dramaticReveal(text, {type:'fade'});
  });

  btnD.addEventListener('click', e=>{
    clickPulse(e.currentTarget);
    const text = pick(ideas);
    dramaticReveal(text, {type:'fade'});
  });

  btnR.addEventListener('click', e=>{
    clickPulse(e.currentTarget);
    const text = pick(plans);
    dramaticReveal(text, {type:'fade'});
  });

  // keyboard accessibility: number keys 1..5 trigger features
  document.addEventListener('keydown', (ev)=>{
    const k = ev.key;
    if (k === '1') btnK.click();
    if (k === '2') btnP.click();
    if (k === '3') btnI.click();
    if (k === '4') btnD.click();
    if (k === '5') btnR.click();
  });

  // small gentle random twinkle on stars using CSS variables (optional)
  // (kept light—pure CSS animations already in styles)
});
