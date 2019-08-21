import React from "react"
import {Link} from "react-router-dom"

function Post(props){
    return(
        <div>
            <a href={`/${props.slug}`}>
                <div className="postPrev">
                    <img src={props.imageURL} alt={props.alt} />
                    <h5>{props.title}</h5>
                </div>
            </a>
        </div>
    )
}

export default Post