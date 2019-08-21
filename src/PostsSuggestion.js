import React, {Component} from "react"
import Post from "./Post"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class PostsSuggestion extends Component {

    constructor(){
        super()
        this.state = {
            data: [],
            position: 0
        }
        this.transLeft = this.transLeft.bind(this)
        this.transRight = this.transRight.bind(this)
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

    transLeft(index, arrayLength){
        if(window.innerWidth >= 1100){
            if(index <= 0 && index >= -1*(arrayLength-4)*(100/arrayLength)) {
                this.setState({
                    position: index + (-1*(100/(arrayLength)))
                })
            }
        } else {
            if(index <= 0 && index >= -1*(arrayLength-2)*(100/arrayLength)) {
                this.setState({
                    position: index + (-1*(100/(arrayLength)))
                })
            }
        }
    }

    transRight(index, arrayLength){
        if(index < 1 && index !== 0) {
            this.setState({
                position: index - (-1*(100/(arrayLength)))
            })
        }
    }

    render(){
        const dataArray = this.state.data.length !== 0 ? 
            this.state.data.map(postData => {
                return(
                    <Post 
                        key={postData.id}
                        imageURL={postData.thumbnail.url}
                        alt={postData.thumbnail.alt}
                        title={postData.title}
                        slug={postData.slug}
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
                    <div className="leftArrow" onClick={() => this.transRight(this.state.position,dataArray.length)}>❮</div>
                    <div className="postsWrapper">
                        <div className="postsContainer" style={{"transform":`translateX(${this.state.position}%)`}}>
                            {dataArray}
                        </div>
                    </div>
                    <div className="rightArrow" onClick={() => this.transLeft(this.state.position,dataArray.length)}>❯</div>
                </div>
            )
        }
    }

}

export default PostsSuggestion