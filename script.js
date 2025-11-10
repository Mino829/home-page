// 年を自動出力
document.getElementById('year').textContent = new Date().getFullYear();

// 簡単なフェードイン
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-item').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity .6s ease ' + (i*0.12) + 's';
    requestAnimationFrame(()=> el.style.opacity = 1);
  });
});
