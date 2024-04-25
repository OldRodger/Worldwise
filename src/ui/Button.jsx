import React from 'react'

const Button = ({ children, type, onClick, className }) => {
  let classStyle = "";
  if (type === "primary")
    classStyle = "text-dark--2 bg-brand--2"
  if (type === "logout")
    classStyle = "bg-dark--2 text-xs"
  if (type === "back")
    classStyle = "border border-light--1"
  if (type === "position")
    classStyle = "absolute z-[998] text-dark--2 bg-brand--2 bottom-[8%] left-1/2 -translate-x-1/2 "

  return <button
    onClick={onClick}
    className={` ${className ?? ""} py-[8px] px-4 uppercase rounded-md font-semibold text-[15px] ${classStyle}`}
  >
    {children}
  </button>
}

export default Button