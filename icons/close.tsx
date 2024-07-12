import React from 'react'


interface CloseProps {
  width?: number;
  height?: number;
  fill?: string;
}
export const Close = ({width = 24, height = 24, fill = '#808080'}: CloseProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  )
}
