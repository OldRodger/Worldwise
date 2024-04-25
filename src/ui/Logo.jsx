import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ size = "s" }) {
    let style;
    if (size.toLowerCase() === "sm")
        style = "w-36";
    else if (size.toLowerCase() === "md")
        style = "w-40";
    else if (size.toLowerCase() === "lg")
        style = "w-48";
    else if (size.toLowerCase() === "xl")
        style = "w-56";


    return <Link to="/" >
        <img src="/logo.png" alt="logo-image" className={style} />
    </Link>
}
