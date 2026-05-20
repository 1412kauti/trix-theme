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

/* ─── Init TOC on page load (article view in Ghost) ─── */
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.article-body')) {
    initTOC();
  }
});

})();
