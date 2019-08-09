import React from "react"

function ArticlePreview(props){
    return(
        <div className="postCard">
            <img src={props.image} alt={props.alt} />
            <div className="context">
                <h1>{props.title}</h1>
                <p>{props.excerpt}</p>
                <a href="#">Read more &rarr;</a>
            </div>
        </div>
    )
}

export default ArticlePreview