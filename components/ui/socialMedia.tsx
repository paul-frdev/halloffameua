import React from 'react'
import Link from 'next/link'
import { socialMediaData } from '../Header'

export const SocialMedia = () => {
  return (
    <ul className="flex  justify-center items-center gap-x-[50px] w-full max-w-[328px]">
      {socialMediaData.map(item => (
        <li className="transition-all duration-300" key={item.id}>
          <Link href={item.link} style={{ fill: "#000" }}>
            {item.social}
          </Link>
        </li>
      ))}
    </ul>
  )
}
