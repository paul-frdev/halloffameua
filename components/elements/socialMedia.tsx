import React from 'react'
import Link from 'next/link'
import { Facebook } from "@/icons/facebook";
import { Twitter } from "@/icons/twitter";
import { Instagram } from "@/icons/instagram";
import { Youtube } from "@/icons/youtube";

const socialMediaData = [
  { id: 1, social: <Facebook />, link: "https://www.facebook.com" },
  { id: 2, social: <Twitter />, link: "https://www.twitter.com" },
  { id: 3, social: <Instagram />, link: "https://www.instagram.com" },
  { id: 4, social: <Youtube />, link: "https://www.youtube.com" },
];

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
