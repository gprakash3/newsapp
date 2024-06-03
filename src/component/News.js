import Newsitem from './Newsitem'
import Spinner from './Spinner'

import PropTypes from 'prop-types'

import React, { Component } from 'react'

export class News extends Component {
  //we can pass proptype in class using static method
static defaultProps = {
      country : "in",
      pageSize : 6,
      category:"general"
}  
static propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

  constructor(){
    super();
    // Do not set this.state directly
    //use this.setState for setting this.state
    //we can also set state using props (by using this.props)
   this.state= {
    articles : [],
    loading:false,
    page:1
   } 
  }

  // componentDidMount()  ==>   It is life cycle method     It will run after render()
  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey} &page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedarticle = await data.json();
    // //here we are using setState to set articles... since we have already declared article as state.
    // console.log(parsedarticle);
    // this.setState({
    //   articles:parsedarticle.articles,
    //   totalArticle:parsedarticle.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }
   updateNews = async() =>{
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedarticle = await data.json();
    //here we are using setState to set articles... since we have already declared article as state.
    console.log(this.props);
    this.setState({
      articles:parsedarticle.articles,
      totalArticle:parsedarticle.totalResults,
      loading:false,
    });
  }

  handlePrevbtn = async() => {
    // console.log('prev clicked');
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedarticle = await data.json();
    // //here we are using setState to set articles... since we have already declared article as state.
    // console.log(parsedarticle);
    this.setState({
      // articles:parsedarticle.articles,
      // totalArticle:parsedarticle.totalResults,
      // loading:false,
      page:this.state.page - 1
    });
    this.updateNews();
  }

  handleNextbtn =async() => {
    console.log('next clicked');
    if(this.state.page+1 >  Math.ceil(this.state.totalArticle/this.props.pageSize)){

    }
    else{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedarticle = await data.json();
    // //here we are using setState to set articles... since we have already declared article as state.
    // console.log(parsedarticle);
    this.setState({
      // articles:parsedarticle.articles,
      // totalArticle:parsedarticle.totalResults,
      // loading:false,
      page:this.state.page+1
    });
    this.updateNews();
    }
  }

  render() {
    return (
      <>
       <div className="container my-3">
         <h2>TOP HEADLINES</h2>
         {/* If API loading is in process then show spinner */}
         {this.state.loading && <Spinner/>}
         <div className='row'>
          {/* if page is loading then do not show content  || when spinner is showing then do not show content*/}
          {!this.state.loading && this.state.articles.map((ele) => {
            return <div className='col-md-4' key = {ele.url}>
              <Newsitem title={ele.title} description={ele.description} imgsrc={ele.urlToImage} url = {ele.url} author={ele.author} date={ele.publishedAt}/>
            </div>

          })}        
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button type="button" disabled={this.state.page<=1} className="btn btn-primary " onClick={this.handlePrevbtn}> &larr; prev</button>
      <button type="button"  disabled={this.state.page+1 >  Math.ceil(this.state.totalArticle/this.props.pageSize)} className="btn btn-primary " onClick={this.handleNextbtn}>next &rarr;</button>
      </div>

    </>
    )
  }
}

export default News

