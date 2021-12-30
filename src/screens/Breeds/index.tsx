import React from 'react'
import {useParams} from 'react-router-dom'

export default function Breeds() {
  let {id} = useParams()
  return <div>{id}</div>
}
