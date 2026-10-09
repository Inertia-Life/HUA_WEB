const titles=['有源网络','结构图化简','微分方程建模','误差信号传递函数','脉冲响应与输出','输入与扰动','信号流图','双输入双输出'];
const answerPages=[1,2,3,4,5,7,8,6];
const nav=document.getElementById('question-nav');
nav.innerHTML=questions.map((q,i)=>`<a href="#q${i+1}"><span class="num">${i+1}</span><span>${titles[i]}</span></a>`).join('');
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function math(s){return s.split(/(\$[^$]+\$)/g).map(part=>part.startsWith('$')?katex.renderToString(part.slice(1,-1),{throwOnError:false,output:'htmlAndMathml'}):escapeHTML(part)).join('');}
let current=0;
function render(){const match=location.hash.match(/^#q([1-8])$/);current=match?Number(match[1])-1:0;const q=questions[current];document.title=`第 ${q.number} 题 · ${titles[current]} · 花蝇蝶`;document.getElementById('question').innerHTML=`<div class="qheader"><h2>第 ${q.number} 题 · ${titles[current]}</h2><span class="tag">原题 ${q.original_number}</span></div><div class="body"><p>${math(q.body)}</p>${q.paragraphs.map(p=>`<p>${math(p)}</p>`).join('')}</div>${q.figure?`<figure class="figure"><img src="${q.figure.svg}" alt="图 ${q.figure.number} ${q.figure.caption||'双输入双输出信号流图'}"><figcaption>图 ${q.figure.number}${q.figure.caption?' · '+q.figure.caption:''}</figcaption></figure>`:''}<details class="answer"><summary>查看参考答案</summary><img loading="lazy" src="assets/answer-${answerPages[current]}.png" alt="第 ${q.number} 题参考答案原稿"><a href="assets/answer-${answerPages[current]}.png" target="_blank" rel="noopener">打开高清答案</a></details>`;[...nav.children].forEach((a,i)=>{a.classList.toggle('active',i===current);if(i===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.getElementById('prev').disabled=current===0;document.getElementById('next').disabled=current===7;document.getElementById('progress').textContent=`${current+1} / 8`;}
document.getElementById('prev').onclick=()=>location.hash=`q${current}`;
document.getElementById('next').onclick=()=>location.hash=`q${current+2}`;
window.addEventListener('hashchange',render);render();
