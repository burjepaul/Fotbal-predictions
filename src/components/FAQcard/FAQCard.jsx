import React from 'react'
import './FAQCard.styles.scss'

const FAQCard = ({question, answer}) => {
  return (
    <div className='faqCard'>
      <p className='question'>{question}</p>
      <p className='answer'>{answer}</p>
    </div>
  )
}

export default FAQCard
