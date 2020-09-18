import React from 'react'

// Props

// title string
// extra classNames
// hAlignment (left, center, right, justify)
// vAlignment (baseline, top, middle, bottom, text-top, text-bottom) 
// size (xs/sm/base/lg)
// color (red-100)
// transform (uppercase/lowercase/capitalize/normal-case)
// style custom styling

export const Subtitle = ({ title, className, hAlignment, vAlignment, size, color, transform, style }) => {
    return (
        <p className={`text-${size} ${className} text-${hAlignment} text-${color} text-${transform} align-${vAlignment}`} style={style}>{title}</p>
    )
}

