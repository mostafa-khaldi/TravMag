import React, {Component} from "react"
import Header from "./Header"
import ArticlePreview from "./ArticlePreview"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Article from "./Article"


class App extends Component {

  constructor(){
    super()
    this.state = {
      articleData: []
    }
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

  render(){
    const dataArray = this.state.articleData.length != 0 ?
     this.state.articleData.map(
      (articleData) => {
        console.log(articleData.id);
        return (
          <ArticlePreview 
            key={articleData.id}
            id={articleData.id}
            image={articleData.thumbnail.url}
            alt={articleData.thumbnail.alt}
            title={articleData.title}
            excerpt={articleData.excerpt}
          />
        )
      } 
    ) : " ";

    if (dataArray === ""){
      return(
        <div></div>
      )
    } else {
      const homeComponent = () => {
        return(
          <div>
            <Header />
            <div className="main">
              <div className="wrapper">
                <h1>See what's new</h1>
                <div className="posts">
                  {dataArray}
                </div>
                <div className="button">
                  <button>Load more</button>
                </div>
              </div>
             </div>
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