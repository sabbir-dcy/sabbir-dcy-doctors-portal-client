import React from 'react'

const CTA = ({ children, className, action, disabled }) => {
  return (
    <button
      className={`${className} btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-0`}
      onClick={action}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default CTA
