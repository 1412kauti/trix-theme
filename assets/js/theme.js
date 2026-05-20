/* Kauti's Trix — Theme JavaScript */

(function() {

/* ─── Search overlay ─── */
var searchOverlay = document.getElementById('search-overlay');
var searchInput = document.getElementById('search-input');

window.openSearch = function() {
  searchOverlay.classList.add('open');
  setTimeout(function() { searchInput.focus(); }, 100);
};

window.closeSearch = function() {
  searchOverlay.classList.remove('open');
  searchInput.value = '';
};

if (searchOverlay) {
  searchOverlay.addEventListener('click', function(e) {
    if (e.target === this) closeSearch();
  });
}

/* ─── Tag dropdown ─── */
var tagDrop = document.getElementById('tag-drop');

window.toggleTagMenu = function(e) {
  e.stopPropagation();
  tagDrop.classList.toggle('open');
};

document.addEventListener('click', function() {
  if (tagDrop) tagDrop.classList.remove('open');
});

/* ─── Archive filter ─── */
window.filterArchive = function(cat, btn) {
  document.querySelectorAll('.archive-filters button').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('#archive-list li').forEach(function(li) {
    li.style.display = (cat === 'all' || li.dataset.cat === cat) ? '' : 'none';
  });
};

/* ─── TOC: auto-generate, collapsible, scroll spy ─── */
var tocCollapsed = false;
var tocH3State = {};

function initTOC() {
  var body = document.querySelector('.article-body');
  var tree = document.getElementById('toc-tree');
  if (!body || !tree) return;

  var headings = body.querySelectorAll('h2[id], h3[id]');
  var html = '';
  var currentH2 = null;
  var h3s = [];

  headings.forEach(function(h) {
    if (h.tagName === 'H2') {
      if (currentH2 && h3s.length) {
        html += renderH3s(currentH2, h3s);
        h3s = [];
      }
      currentH2 = h.id;
      var text = h.textContent.replace(/\s*\[.*?\]\s*/g, '');
      html += '<div class="toc-group">';
      html += '<a class="toc-h2" href="#' + h.id + '" onclick="scrollToSection(event, \'' + h.id + '\')">';
      html += '<span class="toc-arrow" onclick="toggleH3(event, \'' + h.id + '\')">▸</span>';
      html += '<span>' + escapeHtml(text) + '</span>';
      html += '</a>';
    } else if (h.tagName === 'H3' && currentH2) {
      h3s.push({id: h.id, text: h.textContent});
    }
  });

  if (currentH2 && h3s.length) {
    html += renderH3s(currentH2, h3s);
  }

  tree.innerHTML = html;
  setupScrollSpy();
}

function renderH3s(h2Id, h3s) {
  var expanded = tocH3State[h2Id] !== false;
  var cls = expanded ? '' : ' collapsed';
  var arrowCls = expanded ? '' : ' rotated';
  var style = expanded ? '' : ' style="max-height:0"';
  var html = '<div class="toc-h3-wrap' + cls + '" id="h3-wrap-' + h2Id + '"' + style + '">';
  h3s.forEach(function(h3) {
    html += '<a class="toc-h3" href="#' + h3.id + '" onclick="scrollToSection(event, \'' + h3.id + '\')">' + escapeHtml(h3.text) + '</a>';
  });
  html += '</div></div>';
  setTimeout(function() {
    var arrow = document.querySelector('.toc-h2[href="#' + h2Id + '"] .toc-arrow');
    if (arrow) arrow.className = 'toc-arrow' + arrowCls;
  }, 0);
  return html;
}

window.toggleTOC = function() {
  tocCollapsed = !tocCollapsed;
  var tree = document.getElementById('toc-tree');
  var btn = document.getElementById('toc-toggle');
  if (tree) tree.classList.toggle('collapsed', tocCollapsed);
  if (btn) btn.classList.toggle('collapsed', tocCollapsed);
};

window.toggleH3 = function(e, h2Id) {
  e.preventDefault();
  e.stopPropagation();
  var isCollapsed = tocH3State[h2Id] === false;
  tocH3State[h2Id] = isCollapsed;
  var wrap = document.getElementById('h3-wrap-' + h2Id);
  var arrow = e.target;
  if (wrap) {
    wrap.classList.toggle('collapsed', !isCollapsed);
    wrap.style.maxHeight = isCollapsed ? wrap.scrollHeight + 'px' : '0';
  }
  if (arrow) arrow.classList.toggle('rotated', !isCollapsed);
};

window.scrollToSection = function(e, id) {
  e.preventDefault();
  var el = document.getElementById(id);
  if (el) {
    var headerOffset = 80;
    var top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
};

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function setupScrollSpy() {
  var headings = document.querySelectorAll('.article-body h2[id], .article-body h3[id]');
  if (!headings.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        document.querySelectorAll('.toc-h2, .toc-h3').forEach(function(a) { a.classList.remove('active'); });
        var link = document.querySelector('.toc-h2[href="#' + entry.target.id + '"], .toc-h3[href="#' + entry.target.id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

  headings.forEach(function(h) { observer.observe(h); });
}

/* ─── Tag carousel ─── */
function initCarousel() {
  var track = document.querySelector('.carousel-track');
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  var dots = document.getElementById('carousel-dots');
  if (!track || !dots) return;

  var slides = track.children;
  var total = slides.length;
  if (total < 2) { if (dots) dots.style.display = 'none'; return; }

  var idx = 0;
  var interval = null;
  var visible = 3;
  if (window.innerWidth < 720) visible = 1;
  var maxIdx = Math.max(0, total - visible);

  function buildDots() {
    dots.innerHTML = '';
    var n = maxIdx + 1;
    for (var i = 0; i < n; i++) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === idx ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function(j) { return function() { goTo(j); }; }(i));
      dots.appendChild(dot);
    }
  }

  function goTo(i) {
    if (i < 0) i = 0;
    if (i > maxIdx) i = maxIdx;
    idx = i;
    var offset = -(idx * (100 / visible));
    track.style.transform = 'translateX(' + offset + '%)';
    var allDots = dots.querySelectorAll('.dot');
    allDots.forEach(function(d, j) { d.classList.toggle('active', j === idx); });
  }

  function nextSlide() { goTo(Math.min(idx + 1, maxIdx)); }
  function prevSlide() { goTo(Math.max(idx - 1, 0)); }

  function startAuto() {
    stopAuto();
    interval = setInterval(function() {
      if (idx >= maxIdx) { goTo(0); } else { nextSlide(); }
    }, 5000);
  }

  function stopAuto() { if (interval) { clearInterval(interval); interval = null; } }

  buildDots();
  goTo(0);
  startAuto();

  if (prev) prev.addEventListener('click', function() { stopAuto(); prevSlide(); startAuto(); });
  if (next) next.addEventListener('click', function() { stopAuto(); nextSlide(); startAuto(); });

  var carousel = document.querySelector('.tag-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    carousel.addEventListener('touchstart', stopAuto, { passive: true });
    carousel.addEventListener('touchend', startAuto);
  }

  window.addEventListener('resize', function() {
    var v = window.innerWidth < 720 ? 1 : 3;
    if (v !== visible) {
      visible = v;
      maxIdx = Math.max(0, total - visible);
      buildDots();
      goTo(Math.min(idx, maxIdx));
    }
  });
}

/* ─── Init on page load ─── */
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.article-body')) {
    initTOC();
  }
  initCarousel();
});

})();
