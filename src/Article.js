import React from "react"

function Article(props){

    return(
        <div className="articleCard">
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.alt}/>
            <p>{props.excerpt}</p>
            <a href={props.uri}>Read more &rarr;</a>
        </div>
    )

}

export default Article