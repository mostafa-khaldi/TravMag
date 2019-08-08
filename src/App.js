import React, {Component} from "react"
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
        return (
          <Article 
            key={articleData.id}
            image={articleData.thumbnail.url}
            title={articleData.thumbnail.title}
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
            <h1>See what's new</h1>
            {dataArray}
        </div>
      )
    }
  }
}

export default App

// import React, {Component} from "react"
// import Article from "./Article"

// class App extends Component{

//   constructor(){
//     super()
//     this.state = {
//       imgSrc: " ",
//       data: []
//     }
//   }

//   componentDidMount(){
//     fetch("http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json")
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         data: response
//       })
//     })
//   }

//   render(){
//     const dataArray = this.state.data.length === 0 ? "Looding.." :
//       this.state.data.map(data => {
//         return (
//           <Article 
//             key={data.id}
//             title={data.title} 
//             thumbnail={data.thumbnail.url} 
//             alt={data.thumbnail.alt}
//             excerpt={data.excerpt}  
//             uri={data.uri}
//           />
//         )
//       })
//     return(
//       <div className="cards">
//         {dataArray}
//       </div>
//     )
//   }
// }

// export default App