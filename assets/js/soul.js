/* Warm Vellum reading toggle (saved in localStorage) and the Comparison table lens filter. */
(function(){
  var root = document.documentElement, KEY = 'soul-theme';
  function set(v){
    if (v === 'vellum') root.setAttribute('data-theme', 'vellum'); else root.removeAttribute('data-theme');
    try { localStorage.setItem(KEY, v); } catch(e){}
    var b = document.getElementById('theme-toggle');
    if (b){ b.setAttribute('aria-pressed', v === 'vellum' ? 'true' : 'false'); b.textContent = v === 'vellum' ? 'Observatory view' : 'Warm Vellum'; }
  }
  document.addEventListener('DOMContentLoaded', function(){
    var b = document.getElementById('theme-toggle');
    if (b){
      set(root.getAttribute('data-theme') === 'vellum' ? 'vellum' : 'observatory');
      b.addEventListener('click', function(){ set(root.getAttribute('data-theme') === 'vellum' ? 'observatory' : 'vellum'); });
    }
    var f = document.querySelector('[data-filter-for]');
    if (f){
      var table = document.getElementById(f.getAttribute('data-filter-for')), btns = f.querySelectorAll('button'), status = document.getElementById('filter-status');
      btns.forEach(function(btn){
        btn.addEventListener('click', function(){
          var lens = btn.getAttribute('data-lens'), n = 0;
          btns.forEach(function(o){ o.setAttribute('aria-pressed', o === btn ? 'true' : 'false'); });
          table.querySelectorAll('tbody tr').forEach(function(tr){
            var show = lens === 'all' || (' ' + tr.getAttribute('data-lens') + ' ').indexOf(' ' + lens + ' ') > -1;
            tr.hidden = !show; if (show) n++;
          });
          if (status) status.textContent = n + ' positions shown';
        });
      });
    }
  });
})();
