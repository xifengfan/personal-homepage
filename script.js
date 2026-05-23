// ============================================================
// V0.2 — 搜索过滤 + localStorage 持久化
// ============================================================

(function () {
  'use strict';

  var STORAGE_KEY = 'ai-tools-category';

  // --- 渲染个人信息 ---
  function renderProfile() {
    document.getElementById('avatar').src = profileData.avatar;
    document.getElementById('avatar').alt = profileData.name;
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('tagline').textContent = profileData.tagline;

    var socialEl = document.getElementById('social-links');
    profileData.socialLinks.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.url;
      a.className = 'social-link';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = link.icon + '<span>' + link.label + '</span>';
      socialEl.appendChild(a);
    });
  }

  // --- 搜索功能 ---
  function renderSearch() {
    var container = document.getElementById('category-filters');
    var searchWrap = document.createElement('div');
    searchWrap.className = 'search-wrap';

    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-input';
    input.placeholder = '搜索工具名称或描述...';
    input.className = 'search-input';
    input.addEventListener('input', function () {
      var keyword = input.value.trim().toLowerCase();
      var activeCat = document.querySelector('.filter-btn.active');
      var cat = activeCat ? activeCat.dataset.category : '全部';
      renderTools(cat, keyword);
      saveState();
    });

    searchWrap.appendChild(input);
    container.insertBefore(searchWrap, container.firstChild);
  }

  // --- 渲染分类标签 ---
  function renderFilters() {
    var container = document.getElementById('category-filters');

    var categories = ['全部', '对话助手', 'AI编程', 'AI绘图', 'AI写作', 'AI搜索', 'AI视频', 'AI音频'];
    var savedCat = localStorage.getItem(STORAGE_KEY) || '全部';

    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === savedCat ? ' active' : '');
      btn.textContent = cat;
      btn.dataset.category = cat;
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var keyword = document.getElementById('search-input') ? document.getElementById('search-input').value.trim().toLowerCase() : '';
        renderTools(cat, keyword);
        saveState();
      });
      container.appendChild(btn);
    });
  }

  // --- 渲染工具卡片 ---
  function renderTools(category, keyword) {
    var grid = document.getElementById('tool-grid');
    grid.innerHTML = '';

    var filtered = toolsData.filter(function (t) {
      var matchCat = category === '全部' || t.category === category;
      var matchKw = !keyword ||
        t.name.toLowerCase().indexOf(keyword) > -1 ||
        t.description.toLowerCase().indexOf(keyword) > -1 ||
        (t.tags && t.tags.some(function (tag) { return tag.toLowerCase().indexOf(keyword) > -1; }));
      return matchCat && matchKw;
    });

    document.getElementById('tool-count').textContent = filtered.length + ' 个工具';

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color:#9ca3af;grid-column:1/-1;text-align:center;padding:40px 0;">无匹配结果</p>';
      return;
    }

    filtered.forEach(function (tool) {
      var card = document.createElement('a');
      card.href = tool.url;
      card.className = 'tool-card';
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      var tagsHtml = tool.tags
        ? tool.tags.map(function (tag) { return '<span class="tag">' + tag + '</span>'; }).join('')
        : '';

      card.innerHTML =
        '<div class="card-top">' +
          '<img class="card-icon" src="' + tool.icon + '" alt="' + tool.name + '" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239ca3af%22><text y=%2218%22 font-size=%2218%22>?</text></svg>\'"/>' +
          '<div class="card-info">' +
            '<div class="card-name">' + tool.name + '</div>' +
            '<div class="card-category">' + tool.category + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="card-desc">' + tool.description + '</div>' +
        (tagsHtml ? '<div class="card-tags">' + tagsHtml + '</div>' : '');

      grid.appendChild(card);
    });
  }

  function saveState() {
    var active = document.querySelector('.filter-btn.active');
    if (active) localStorage.setItem(STORAGE_KEY, active.dataset.category);
  }

  // --- 初始化 ---
  document.addEventListener('DOMContentLoaded', function () {
    renderProfile();
    renderSearch();
    renderFilters();
    var savedCat = localStorage.getItem(STORAGE_KEY) || '全部';
    renderTools(savedCat, '');
  });

})();
