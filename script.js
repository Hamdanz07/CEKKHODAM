document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') tekanKiri = true;
    if(e.key === 'ArrowRight') tekanKanan = true;
    if(e.key === ' ' || e.key === 'ArrowUp') tekanLompat = true;
});
document.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowLeft') tekanKiri = false;
    if(e.key === 'ArrowRight') tekanKanan = false;
    if(e.key === ' ' || e.key === 'ArrowUp') tekanLompat = false;
});
// Animasi loop
function animasi() {
    if(tekanKiri) gerakKiri();
    if(tekanKanan) gerakKanan();
    if(tekanLompat) lompat();
    requestAnimationFrame(animasi);
}
animasi();
// Gerak mengikuti mouse
arena.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX - arena.getBoundingClientRect().left - gajah.offsetWidth / 2;
    if(mouseX < 0) mouseX = 0;
    if(mouseX > arena.offsetWidth - gajah.offsetWidth) mouseX = arena.offsetWidth - gajah.offsetWidth;
    posisi = mouseX;
    updatePosisi();
});
