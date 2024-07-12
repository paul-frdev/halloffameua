import React from 'react'

export const Youtube = ({ fill = '#6f6f6f' }: { fill?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <g opacity="1" clipPath="url(#clip0_4_84)">
        <path d="M19.615 0.184125C16.011 -0.0618748 7.984 -0.0608748 4.385 0.184125C0.488 0.450125 0.029 2.80412 0 9.00012C0.029 15.1851 0.484 17.5491 4.385 17.8161C7.985 18.0611 16.011 18.0621 19.615 17.8161C23.512 17.5501 23.971 15.1961 24 9.00012C23.971 2.81512 23.516 0.451125 19.615 0.184125ZM9 13.0001V5.00013L17 8.99312L9 13.0001Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_4_84">
          <rect width="24" height="18.0002" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
}
