import React, {Component} from "react"
import ArticlePreview from "./ArticlePreview"

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
        return (
          <ArticlePreview 
            key={articleData.id}
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
      return(
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
      )
    }
  }
}

export default App