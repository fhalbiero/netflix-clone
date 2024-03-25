import React, { useEffect, useState } from 'react';

import FetchData from '../../services/fetchData';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';

import { Container } from './styles';

export function Dashboard() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {

      let list = await FetchData.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await FetchData.getMovieInfo(chosen.id, 'tv' )

      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);


  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 40){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }


    window.addEventListener('scroll', scrollListener);

    return() => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <Container>

      {!movieList.length && 
        <div className="loading">
         {/* <img src="https://cdn.lowgif.com/full/ce629026a12a85a7-the-tech-behind-netflix-s-worldwide-expansion-is-a-big-deal-for-the.gif"></img> */}
        </div>  
      }

      <Header black={blackHeader} />

      {featuredData &&
         <FeaturedMovie item={featuredData} />
      }
     
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>

      <footer>
        <h4>Developed by <a href="http://fabioalbiero.com" target="_blank">Fabio Albiero</a></h4> 
        <div>
          <span>All image rights reserved to Netflix</span>
          <span>API used <a href="https://www.themoviedb.org/?language=en-EN" target="_blank">Themoviedb.org</a> </span> 
        </div>
      </footer>

    </Container>
  );

}