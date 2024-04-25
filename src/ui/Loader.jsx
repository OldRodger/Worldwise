import React from 'react'

const Loader = ({ size = "lg" }) => {
  let sizeStyle;
  if (size === "sm") {
    sizeStyle = "w-5 border-4"
  }

  if (size === "md") {
    sizeStyle = "w-8 border-8"
  }

  if (size === "lg") {
    sizeStyle = "w-10 border-8"
  }

  return <div className={`aspect-square border-transparent border-l-dark--0 border-t-dark--1 border-r-dark--2  rounded-full animate-spin ${sizeStyle}`} />
}

export default Loader