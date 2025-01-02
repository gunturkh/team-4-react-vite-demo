import React from 'react'

const Button = ({ onClickProps, children }: { onClickProps: () => void, children: React.ReactNode }) => {
  return (
    <button onClick={onClickProps}>{children}</button>
  )
}

export default Button