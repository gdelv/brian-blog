import React from 'react'
// FLEX COMPONENT
// Props - className
export const Flex = ({ className, children, style }) => (
	<div className={`flex ${className}`} style={style}>{children}</div>
)