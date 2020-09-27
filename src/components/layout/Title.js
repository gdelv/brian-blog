import React from 'react'

// Props

// title string
// extra classNames
// hAlignment (left, center, right, justify)
// vAlignment (baseline, top, middle, bottom, text-top, text-bottom) 
// size (1xl/2xl/3xl/4xl/5xl/6xl)
// color (red-100)
// transform (uppercase/lowercase/capitalize/normal-case)
// style custom styling

export const Title = ({ title, className, hAlignment, vAlignment, size, color, transform, style }) => {
    return (
        <h1 className={`title is-${size} ${className} text-${hAlignment} text-${color} text-${transform} align-${vAlignment}`} style={style}>{title}</h1>
    )
}
