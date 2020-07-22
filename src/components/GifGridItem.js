import React from 'react'

export const GifGidItem = ({id, title, url}) => {

    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}