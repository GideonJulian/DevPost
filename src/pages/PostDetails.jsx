import React from 'react'
import { useParams } from 'react-router-dom'
const PostDetails = () => {
  const {id} = useParams()
  return (
    <div className='text-white'>PostDetails {id}</div>
  )
}

export default PostDetails