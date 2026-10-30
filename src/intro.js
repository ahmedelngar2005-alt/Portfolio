// A brief welcome on each page load, with a skip action and a hard timeout.
(() => {
  const intro = document.getElementById('site-intro');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const skip = document.getElementById('intro-skip');
  const previousFocus = document.activeElement;
  intro.hidden = false;
  document.body.classList.add('intro-playing');
  let closed = false;
  function finish() {
    if (closed) return;
    closed = true;
    intro.classList.add('intro-out');
    document.body.classList.remove('intro-playing');
    setTimeout(() => { intro.hidden = true; if (previousFocus && previousFocus !== document.body) previousFocus.focus(); else document.getElementById('lang')?.focus({preventScroll:true}); }, 450);
  }
  skip.addEventListener('click', finish);
  intro.addEventListener('keydown', event => {
    if (event.key === 'Escape') finish();
    if (event.key === 'Tab') { event.preventDefault(); skip.focus(); }
  });
  skip.focus({preventScroll:true});
  setTimeout(finish, 2400);
})();
