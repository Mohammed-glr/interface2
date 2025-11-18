// een card component voor displaying de memes uit json

class Card {
    constructor(data = {}) {
        this.title = data.title || 'Untitled';
        this.year = data.year || 'Unknown';
        this.image = data.image || '';
        this.description = data.description || 'No description available.';
        this.category = data.category || 'General';
    }


    createCard() {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'meme-card';
        
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.description;
        cardDiv.appendChild(img);
        
        const nameElem = document.createElement('h3');
        nameElem.textContent = this.title;
        cardDiv.appendChild(nameElem);
        
        const captionElem = document.createElement('p');
        captionElem.textContent = this.description;
        cardDiv.appendChild(captionElem);
        
        const yearElem = document.createElement('p');
        yearElem.textContent = `Year: ${this.year}`;
        cardDiv.appendChild(yearElem);
        
        const tagsElem = document.createElement('p');
        tagsElem.textContent = `Category: ${this.category}`;
        cardDiv.appendChild(tagsElem);
        
        return cardDiv;
    }

    createCardTemplate() {
        return `
        <div class="meme-card empty-card">
            No data available.
        </div>
        `;
    }
}

export default Card;