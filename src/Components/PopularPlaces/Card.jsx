import React from 'react'
import cardcss from './Card.module.scss'

const Card = ({imageurl,title}) => {
    return (
        <div className={cardcss.card}>
            <img className={cardcss.image2} src={imageurl}/>
            <p className={cardcss.text}>{title}</p>
        </div>
    )
}

export default Card;