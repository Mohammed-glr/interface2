// card
import Card from './memeCard.js';
import dataService from './dataService.js';

const uiRenderer = () => {
    const { 
        fetchDataByCategory,
        searchMemes,
        fetchDataByYearGab
     } = dataService();

    const  renderMemes = async () => {
        const memeContainer = document.getElementById('meme-container');
        const categorySelect = document.getElementById('category-select');
        const searchInput = document.getElementById('search-input');
        const yearSelect = document.getElementById('year-select');
        if (!memeContainer) {
            console.error('Meme container not found in the DOM.');
            return;
        }

        const memesData = await fetchDataByCategory(categorySelect.value)
        const memesDataBySearch = await searchMemes(searchInput.value);
        const memesDataByYear = await fetchDataByYearGab(yearSelect.value);

        memeContainer.innerHTML = '';
        let filteredMemes = memesData;

        if (searchInput.value.trim() !== '') {
            filteredMemes = memesDataBySearch;
            
        } else if (yearSelect.value !== 'all') {
            filteredMemes = memesDataByYear;
        }

        if (filteredMemes && filteredMemes.length > 0) {
            filteredMemes.forEach(memeData => {
                const memeCard = new Card(memeData);
                memeContainer.appendChild(memeCard.createCard());
            });
        } else {
            const emptyCard = new Card();
            memeContainer.innerHTML = emptyCard.createCardTemplate();
        }
    }


    return { renderMemes };

}

export default uiRenderer;