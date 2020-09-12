import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


import { Container } from './styles';


const MovieRow = ({title, items = []}) => {

    const [scrollX, setScrollX] = useState(23); 

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
           x = 23;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 180;
        if(window.innerWidth - listWidth > x){
            x = (window.innerWidth - listWidth) - 100;
        }
        setScrollX(x)
        
    }
    

    return (
        <Container itemsQuantity={items.results.length} scrollX={scrollX} >
            <h2>{title}</h2>

            <div className="left" onClick={handleLeftArrow}>
                <FaChevronLeft />
            </div>

            <div className="right" onClick={handleRightArrow}>
                <FaChevronRight />
            </div>
            
            <div className="listarea">

                <div className="list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 180
                }}>
                    {items.results.length && items.results.map((item, key) =>(

                        <div key={key} className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>

                    ))}
                </div>

            </div>
        </Container>
    )
}

export default MovieRow;