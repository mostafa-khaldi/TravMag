import React from "react"
import {Link} from "react-router-dom"

function ArticlePreview(props){
    return(
        <div className="postCard">
            <img src={props.image} alt={props.alt} />
            <div className="context">
                <h1>{props.title}</h1>
                <p>{props.excerpt}</p>
                <Link to={`/${props.id}`}>Read more &rarr;</Link>
            </div>
        </div>
    )
}

export default ArticlePreview