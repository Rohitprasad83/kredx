import React from 'react'

function Card({ cardDetail }) {
  return (
    <div className="home-card">
      <img src={cardDetail.cardImage} alt="invoice 1" />
      <h4 className="home-card-heading">{cardDetail.cardHeading}</h4>
      <p className="home-card-paragraph">{cardDetail.cardParagraph}</p>
    </div>
  )
}

export { Card }
