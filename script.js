// ============================================================
// V0.1 MVP — 渲染逻辑
// ============================================================

(function () {
  'use strict';

  // --- 渲染个人信息 ---
  function renderProfile() {
    document.getElementById('avatar').src = profileData.avatar;
    document.getElementById('avatar').alt = profileData.name;
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('tagline').textContent = profileData.tagline;

    const socialEl = document.getElementById('social-links');
    profileData.socialLinks.forEach(function (link) {
      const a = document.createElement('a');
      a.href = link.url;
      a.className = 'social-link';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = link.icon + '<span>' + link.label + '</span>';
      socialEl.appendChild(a);
    });
  }

  // --- 渲染分类标签 ---
  function renderFilters() {
    const container = document.getElementById('category-filters');

    // 提取所有分类
    const categories = ['全部', ...new Set(toolsData.map(function (t) { return t.category; }))];

    categories.forEach(function (cat) {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === '全部' ? ' active' : '');
      btn.textContent = cat;
      btn.dataset.category = cat;
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderTools(cat);
      });
      container.appendChild(btn);
    });
  }

  // --- 渲染工具卡片 ---
  function renderTools(category) {
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = '';

    const filtered = category === '全部'
      ? toolsData
      : toolsData.filter(function (t) { return t.category === category; });

    // 更新计数
    document.getElementById('tool-count').textContent =
      filtered.length + ' 个工具';

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color:#9ca3af;grid-column:1/-1;text-align:center;padding:40px 0;">暂无工具</p>';
      return;
    }

    filtered.forEach(function (tool) {
      const card = document.createElement('a');
      card.href = tool.url;
      card.className = 'tool-card';
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      const tagsHtml = tool.tags
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

  // --- 初始化 ---
  document.addEventListener('DOMContentLoaded', function () {
    renderProfile();
    renderFilters();
    renderTools('全部');
  });

})();
