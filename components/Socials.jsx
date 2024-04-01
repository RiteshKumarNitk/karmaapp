import React from 'react'
import { RiYoutubeFill,RiLinkedinFill,RiGithubFill,RiFacebookBoxFill,RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'

const icons=[
  {
    path:'/',
    name:<RiYoutubeFill/>
  },
  {
    path:'/',
    name:<RiLinkedinFill/>
  },
  {
    path:'/',
    name:<RiGithubFill/>
  },
  {
    path:'/',
    name:<RiFacebookBoxFill/>
  },
  {
    path:'/',
    name:<RiInstagramFill/>
  },

]

const Socials = ({containerStyles, inconsStyles}) => {
  return <div className={`${containerStyles}`}>
    {
      icons.map((icon,index)=>{
        return <Link href={icon.path} key={index}>
          <div className={`${inconsStyles} flex`}>{icon.name}</div>
        </Link>
      })
    }
  </div>
}

export default Socials