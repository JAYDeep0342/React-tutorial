import React from 'react'
import RightcardContent from './RightcardContent'

function Rightcard(props) {
  return (
    <div className=' h-full w-80  relative overflow-hidden rounded-4xl shrink-0 '>
<img className = ' h-full w-full  object cover  'src={props.img} alt ="" />
<RightcardContent  color ={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
