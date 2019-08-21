import React, {Component} from "react"
import gif from "./images/spinnerGIF.svg"
import Header from "./Header"
import Footer from "./Footer"
import ArticlePreview from "./ArticlePreview"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Article from "./Article"


class App extends Component {

  constructor(){
    super()
    this.state = {
      articleData: [],
      index: 2
    }
    this.changeIndex = this.changeIndex.bind(this)
  }

  componentDidMount(){
    fetch("http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          articleData: response
        })
      })
  }

  changeIndex(){
    if(this.state.index < this.state.articleData.length){
      this.setState({
        index: this.state.index+1
      })
    }
  }

  render(){
    const dataArray = this.state.articleData.length !== 0 ?
     this.state.articleData.map(
      (articleData) => {
        return (
          <ArticlePreview 
            key={articleData.id}
            slug={articleData.slug}
            image={articleData.thumbnail.url}
            alt={articleData.thumbnail.alt}
            title={articleData.title}
            excerpt={articleData.excerpt}
          />
        )
      } 
    ) : " ";

    if (dataArray === " "){
      return(
        <div className="spinner">
          <img src={gif} alt="spinner" />
        </div>
      )
    } else {
      const dataArrayToDisplay = []

      for(let i=0; i < this.state.index; i++){
        dataArrayToDisplay.push(dataArray[i]);
      }

      const homeComponent = () => {
        const buttonText = this.state.index !== dataArray.length ? "Load More" : "No More To Show"
        const buttonStyle = this.state.index !== dataArray.length ? 
        {
          color: "white",
          borderColor: "white"
        } :
        {
          color: "#919191",
          borderColor: "#919191"
        }
        return(
          <div>
            <Header />
            <div className="main">
              <div className="wrapper">
                <h1>See what's new</h1>
                <div className="posts">
                  {dataArrayToDisplay}
                </div>
                <div className="button">
                  <button onClick={this.changeIndex} style={buttonStyle}>{buttonText}</button>
                </div>
              </div>
             </div>
             <Footer />
          </div>
        )
      }
      return(
        <Router>
          <Switch>
            <Route path="/" exact component={homeComponent} />
            <Route path="/:id" component={Article} />
          </Switch>
        </Router>
      )
    }
  }
}

export default App