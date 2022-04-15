import React from 'react'

function Card({imageUrl,headline,source,descp,url,category}) {
  return (
    <a href={url} target='_blank'>
    <div className='lg:w-96 lg:h-60 hover:bg-slate-300 sm:w-auto bg-white lg:m-6 m-4 mb-2 p-3 flex flex-col rounded-lg '>
        {/* <img className='basis-1/4 rounded-lg mb-3 w-fit' src={imageUrl} alt='newsimage'/> */}
        <h2 className='font-bold overflow-hidder text-ellipsis'>{headline}</h2>
        <div className='font-thin'>Source: {source}</div>
        <p>{descp}</p>

    </div>
    </a>
  )
}

export default Card