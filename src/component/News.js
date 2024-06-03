import Newsitem from './Newsitem'
import Spinner from './Spinner'

import PropTypes from 'prop-types'

import React, { useEffect, useState } from 'react'

const News=(props) => {
  const [articles, setArticles]= useState([]);
  const [loading, setLoading]= useState(false);
  const [page, setPage]= useState(1);
  const [totalArticle,setTotalArticles]=useState(0);

 
  useEffect(() => {
   updateNews();
  }, []);
  
   
 const updateNews = async(page) =>{    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedarticle = await data.json();
    console.log(parsedarticle);
    setArticles(parsedarticle.articles);
    setTotalArticles(parsedarticle.totalResults);
    setLoading(false);
  
  }

  const handlePrevbtn = async() => {
   await updateNews(page-1);
    setPage(page-1);
  }

  const handleNextbtn =async() => {
    console.log('next clicked');
      await updateNews(page+1);
       setPage(page+1);
    
  }

    return (
      <>
       <div className="container my-3">
         <h3 style={{margin:'35px 0px', marginTop:'90px', textAlign:'center'}}>TOP HEADLINES</h3>
         {/* If API loading is in process then show spinner */}
         {loading && <Spinner/>}
         <div className='row'>
          {/* if page is loading then do not show content  || when spinner is showing then do not show content*/}
          {!loading && articles.map((ele) => {
            return <div className='col-md-4' key = {ele.url}>
              <Newsitem title={ele.title} description={ele.description} imgsrc={ele.urlToImage} url = {ele.url} author={ele.author} date={ele.publishedAt}/>
            </div>

          })}        
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button type="button" disabled={page<=1} className="btn btn-primary " onClick={handlePrevbtn}> &larr; prev</button>
      <button type="button"  disabled={page+1 >  Math.ceil(totalArticle/props.pageSize)} className="btn btn-primary " onClick={handleNextbtn}>next &rarr;</button>
      </div>

    </>
    )
  
}

//we write proptype in function based component at last.
News.defaultProps = {
  country : "in",
  pageSize : 6,
  category:"general"
}  
News.propTypes = {
country: PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
export default News

