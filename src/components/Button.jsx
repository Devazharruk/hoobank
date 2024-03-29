import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins font-medium  text-[18px] text-primary  outline-none ${styles}`}>Get Startes</button>
  )
}

export default Button