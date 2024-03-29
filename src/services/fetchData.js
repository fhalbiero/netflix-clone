import api from "./api";

const language = 'en-EN';


const getData = async(endpoint) => {
    const response = await api(endpoint);
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return[
            {
                slug:'originals',
                title: 'Netflix originals',
                items: await  getData(`/discover/tv?with_network=213&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'trending',
                title: 'Recommended for you',
                items: await  getData(`/trending/all/week?language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'toprated',
                title: 'Top rated',
                items: await  getData(`/movie/top_rated?language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'action',
                title: 'Action',
                items: await  getData(`/discover/movie?with_genres=28&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'comedy',
                title: 'Comedy',
                items: await  getData(`/discover/movie?with_genres=35&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'horror',
                title: 'Horror',
                items: await  getData(`/discover/movie?with_genres=27&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'romance',
                title: 'Romance',
                items: await  getData(`/discover/movie?with_genres=10749&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            },

            {
                slug:'documentary',
                title: 'Documentary',
                items: await  getData(`/discover/movie?with_genres=99&language=${language}&api_key=${process.env.REACT_APP_API_KEY}`)
            }
        ];
    },

    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await getData(`/movie/${movieId}?language=${language}&api_key=${process.env.REACT_APP_API_KEY}`);
                break;

                case 'tv':
                    info = await getData(`/tv/${movieId}?language=${language}&api_key=${process.env.REACT_APP_API_KEY}`);
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}