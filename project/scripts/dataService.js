
const PATH = './data/data.json';


const dataService = () => {
    const fetchData = async () => {
        try {
            const response = await fetch(PATH);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    const fetchDataByCategory = async (category) => {
        try {
            const response = await fetch(PATH);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (category === 'all') {
                return data;
            }
            return data.filter(meme => meme.category === category);
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    const fetchDataByYearGab = async (year) => {
        try {
            const response = await fetch(PATH);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (year === 'all') {
                return data;
            } else if (year === '2017-2019') {
                return data.filter(meme => meme.year >= 2017 && meme.year <= 2019);
            } else if (year === '2004-2016') {
                return data.filter(meme => meme.year >= 2004 && meme.year <= 2016);
            } else {
                return data.filter(meme => meme.year.toString() === year);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    const searchMemes = async (query) => {
        try {
            const response = await fetch(PATH);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            for ( let i = 0; i < data.length; i++) {
                data[i].title = data[i].title.toLowerCase();
                
            }
            const lowerCaseQuery = query.toLowerCase();
            return data.filter(meme => meme.title.includes(lowerCaseQuery));
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    return { fetchData, fetchDataByCategory, searchMemes, fetchDataByYearGab  };
}




export default dataService;
