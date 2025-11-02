// 年表示
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// ヘッダー：スクロールで透明→白
const header = document.getElementById('header');
const toggleHeader = () => {
  if (!header) return;
  const th = 80;
  if (window.scrollY > th) header.classList.add('is-solid'), header.classList.remove('is-transparent');
  else header.classList.add('is-transparent'), header.classList.remove('is-solid');
};
toggleHeader();
window.addEventListener('scroll', toggleHeader, { passive: true });

// モバイルナビ
const navBtn = document.getElementById('navToggle');
const nav = document.querySelector('.site-nav');
if (navBtn && nav) navBtn.addEventListener('click', () => nav.classList.toggle('open'));

// セクションのフェードイン
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-shown'); io.unobserve(e.target); }});
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
