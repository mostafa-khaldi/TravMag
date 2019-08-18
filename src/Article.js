import React , {Component} from "react"
import PostsSuggestion from "./PostsSuggestion"
import Footer from "./Footer"
import logo from "./images/logo.png";
import gif from "./images/spinnerGIF.svg"
import { Markup } from "interweave";
import {Link} from "react-router-dom"


class Article extends Component{

    constructor(props){
        super()
        this.state = {
            data: [],
            dataName: `${props.match.params.id}.json`
        }
    }

    componentDidMount(){
        fetch(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/${this.state.dataName}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response
                })
            })
    }

    render(){
        const data = this.state.data.length != 0 ? this.state.data : null

        if (data != null) {
            return(
                <div className="articleComponent">
                    <div className="wrapper articleArea">
                        <div className="logoWrapper">
                            <Link to={"/"}><img className="logo" src={logo} alt="logo" /></Link>
                        </div>
                        <div className="articleWrapper">
                            <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
                            <h1>{data.title}</h1>
                            <div className="articleMeta">
                                <h4 className="date">{data.date}</h4>
                                <h4 className="author"><span>By</span> {data.author.name}</h4>
                            </div>
                            <p className="excerpt">{data.excerpt}</p>
                            <hr/>
                            <div className="articleContent">
                                <Markup content={data.content[0].text}/>
                            </div>
                        </div>
                        <div className="postSug">
                            <h2>More Topics</h2>
                            <PostsSuggestion/>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="spinner">
                  <img src={gif} alt="spinner" />
                </div>
            )
        }
        
    }
}

export default Article