import React, {Component} from "react"
import Post from "./Post"

class PostsSuggestion extends Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch("http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response
                })
            })
    }

    clickme(){
        alert("Hey");
    }

    render(){
        const dataArray = this.state.data.length != 0 ? 
            this.state.data.map(postData => {
                return(
                    <Post 
                        key={postData.id}
                        imageURL={postData.thumbnail.url}
                        alt={postData.thumbnail.alt}
                        title={postData.title}
                    />
                )
            })
            : this.state.data.length
        
        if(dataArray === 0){
            return(
                <div></div>
            )
        } else {
            return(
                <div className="slider">
                    <div className="leftArrow">❮</div>
                    <div className="postsWrapper">
                        <div className="postsContainer">
                            {dataArray}
                        </div>
                    </div>
                    <div className="rightArrow">❯</div>
                </div>
            )
        }
    }

}

export default PostsSuggestion