import React, { useEffect } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';


import { Container } from './styles';

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }   

    let description = item.overview
    if(description.length > 160){
        description = description.substring(0, 160) + '...';
    }


    return (
        <Container 
            //backgroundImage={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} 
        >    
            <content>
                <div className='featured--horizontal'>
                    <h1>{item.original_name}</h1>
                    <div className='featured--info'>
                        <span className='points'>{item.vote_average} points</span>
                        <span>{ firstDate.getFullYear() }</span>
                        <span>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</span>
                    </div>

                    <div className='featured--description'>{description}</div>
                    <div className='featured--buttons'>
                        <a href={`/watch/${item.id}`} className="featured--watchButton">
                            <FaPlay />
                            Watch
                        </a>
                        <a href={`/list/add/${item.id}`} className="featured--myListButton">
                            More Information
                        </a>
                    </div>
                    <div className='featured--genres'><b>Genre: </b>{genres.join(', ')}</div>

                </div>
            </content>

        </Container>
        
    )
}

export default FeaturedMovie;

