import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }


  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4354b9eea4f94fa48cae85636fc6f4d8&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

  }

  handleNextClick = async () =>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
      
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4354b9eea4f94fa48cae85636fc6f4d8&page=${this.state.page + 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  }

  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4354b9eea4f94fa48cae85636fc6f4d8&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-4">
        <h1>Briefly - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

        </div>
      </div>
    );
  }
}

export default News;
