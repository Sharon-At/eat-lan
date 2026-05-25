
const searchInput=document.getElementById('search');
const cards=[...document.querySelectorAll('.recipe-card')];
const buttons=[...document.querySelectorAll('.filter-btn')];
const noResults=document.getElementById('noResults');
let active='הכול';
function filter(){const q=(searchInput.value||'').trim().toLowerCase();let count=0;cards.forEach(card=>{const text=(card.dataset.search||card.textContent).toLowerCase();const cat=card.dataset.category;const show=(active==='הכול'||cat===active)&&(!q||text.includes(q));card.hidden=!show;if(show)count++;});noResults.style.display=count?'none':'block';}
buttons.forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.category;buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter();}));
searchInput.addEventListener('input',filter);
console.assert(cards.length > 80, 'Expected many recipe cards');
filter();
