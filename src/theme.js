document.documentElement.classList.add("js");
try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t;var l=localStorage.getItem('lang')||'en';document.documentElement.lang=l;document.documentElement.dir=l=='ar'?'rtl':'ltr'}catch(e){document.documentElement.dataset.theme='dark'}
