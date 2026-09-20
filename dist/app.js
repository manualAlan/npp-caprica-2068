const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
function openLinkedPolicy(){const id=location.hash.slice(1);if(!id)return;const el=document.getElementById(id);if(el?.tagName==='DETAILS'){el.open=true;el.scrollIntoView({block:'start'})}}
window.addEventListener('hashchange',openLinkedPolicy);openLinkedPolicy();
document.getElementById('share').addEventListener('click',async()=>{const status=document.getElementById('share-status');const url=location.origin+location.pathname;try{if(navigator.share){await navigator.share({title:'New Progressive Party — A freer, fairer Caprica',text:'Explore the NPP plan for Caprica.',url});status.textContent='Thanks for sharing the NPP vision.'}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);status.textContent='Website link copied. Share it with your community.'}else{status.textContent='Copy this website address to share: '+url}}catch(e){if(e.name!=='AbortError')status.textContent='Copy this website address to share: '+url}});
