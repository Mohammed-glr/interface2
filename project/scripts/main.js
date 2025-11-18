import uiRenderer from "./uiRenderer.js";

const renderer = uiRenderer();

document.addEventListener('DOMContentLoaded', () => {
    renderer.renderMemes();
});

const categorySelect = document.getElementById('category-select');
if (categorySelect) {
    categorySelect.addEventListener('change', () => {
        renderer.renderMemes();
    });
}

const yearSelect = document.getElementById('year-select');
if (yearSelect) {
    yearSelect.addEventListener('change', () => {
        renderer.renderMemes();
    });
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        renderer.renderMemes();
    });
}

