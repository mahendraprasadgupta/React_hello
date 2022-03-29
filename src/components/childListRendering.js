import React from 'react'

function childListRendering({person}) {
  return (
    <div><h1>I am {person.name}. I am {person.age} years old. And My Skill {person.skill}.</h1></div>
  )
}

export default childListRendering