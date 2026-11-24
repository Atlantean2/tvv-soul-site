/* Michaelangelo's nine spiritual plates for the TVV black column on soul.techvestventures.com.
   Rendered by SOUL_COLUMN_RENDER() right after the column markup, so the column is drawn in the first frame. */
window.SOUL_COLUMN = [
  { slug: "00-summary", link: "index.html", caption: "The Threshold of Light", label: "Summary",
    alt: "A golden mandala of light framed by a mosaic arch in the dark" },
  { slug: "01-biblical-anthropology", link: "biblical-anthropology.html", caption: "Breath and Parchment", label: "01 · Sacred Traditions",
    alt: "A golden breath of light flowing over an olive branch and a golden Tree of Life" },
  { slug: "02-historical-views", link: "historical-views.html", caption: "Cathedral and Lotus", label: "02 · Historical Views",
    alt: "A crimson and gold rose window above a lotus, framed by cathedral arches" },
  { slug: "03-philosophy-of-mind", link: "philosophy-of-mind.html", caption: "The Dialectical Chamber", label: "03 · Philosophy of Mind",
    alt: "Golden orbits and spheres suspended in a dark colonnaded chamber" },
  { slug: "04-neuroscience", link: "neuroscience.html", caption: "The Living Constellation", label: "04 · Neuroscience",
    alt: "A branching golden network of neurons like a constellation, with crimson nodes" },
  { slug: "05-near-death-experience", link: "near-death-experience.html", caption: "The Liminal Horizon", label: "05 · Near-Death Research",
    alt: "A horizon of golden light between a dark sky and dark ground" },
  { slug: "06-comparison", link: "comparison.html", caption: "The Cartographer's Table", label: "06 · Comparison",
    alt: "Golden star charts and instruments spread across a table" },
  { slug: "07-conclusive-perceptions", link: "conclusive-perceptions.html", caption: "The Open Sanctuary", label: "07 · Conclusive Perceptions",
    alt: "A band of shining gold beneath a line of crimson in deep darkness" },
  { slug: "08-ai-consciousness", link: "ai-consciousness.html", caption: "The Reflected Mirror", label: "08 · AI Consciousness",
    alt: "A crimson flame beside a crystalline column of golden light" }
];
window.SOUL_COLUMN_RENDER = function(){
  var list = document.getElementById('cosmos-list'); if (!list) return;
  var here = location.pathname.split('/').pop() || 'index.html';
  window.SOUL_COLUMN.forEach(function(it, i){
    var li = document.createElement('li'), a = document.createElement('a'), img = document.createElement('img');
    a.className = 'cosmos-item'; a.href = it.link;
    if (it.link === here) { a.setAttribute('data-here', ''); a.setAttribute('aria-current', 'page'); }
    var base = 'assets/img/' + it.slug;
    img.src = base + '-960.webp';
    img.srcset = base + '-960.webp 960w, ' + base + '-1280.webp 1280w, ' + base + '-1920.webp 1920w';
    img.sizes = '(max-width: 820px) 9.5rem, 24vw';
    img.width = 960; img.height = 540; img.alt = it.alt;
    if (i > 3) img.loading = 'lazy'; else img.decoding = 'sync';
    var cap = document.createElement('span'); cap.className = 'ci-cap'; cap.textContent = it.caption;
    var lab = document.createElement('span'); lab.className = 'ci-label'; lab.textContent = it.label;
    a.appendChild(img); a.appendChild(cap); a.appendChild(lab); li.appendChild(a); list.appendChild(li);
  });
  var col = document.getElementById('cosmos');
  var y = 0; try { y = +sessionStorage.getItem('soul-col-y'); } catch(e){}
  var cur = list.querySelector('[data-here]');
  if (y) col.scrollTop = y; else if (cur && innerWidth > 820) col.scrollTop = Math.max(0, cur.parentNode.offsetTop - 90);
  addEventListener('pagehide', function(){ try { sessionStorage.setItem('soul-col-y', col.scrollTop); } catch(e){} });
};
