import React from "react"

function Post(props){
    return(
        <div className="postPrev">
            <img src={props.imageURL} alt={props.alt} />
            <h5>{props.title}</h5>
        </div>
    )
}

export default Post