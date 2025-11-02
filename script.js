const $=(s,c=document)=>c.querySelector(s);
// nav
const navToggle=$('#navToggle'), siteNav=$('#siteNav');
if(navToggle&&siteNav){
  navToggle.addEventListener('click',()=>{
    const o=navToggle.getAttribute('aria-expanded')==='true';
    navToggle.setAttribute('aria-expanded',String(!o));
    siteNav.style.display=o?'none':'flex';
  });
}
// form demo
function handleSubmit(e){
  e.preventDefault();
  const d=Object.fromEntries(new FormData(e.target).entries());
  $('#formMsg').textContent='送信しました（デモ）。' + (d.name||'') + ' 様、ありがとうございます。';
  e.target.reset();
  return false;
}
// year
const y=new Date().getFullYear(); const yEl=document.getElementById('year'); if(yEl) yEl.textContent=y;
