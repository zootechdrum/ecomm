import React from 'react'

const Rating = ({ value, text }) => {
  return <div className='rating'
  >
      <span>
          <i className={value >= 1 ?''> </i>}
      </span>
  </div>
}

export default Rating
