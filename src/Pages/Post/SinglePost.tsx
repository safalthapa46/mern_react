import React from 'react'
import { useParams } from 'react-router-dom'
import PostDetails from '../../components/Post/PostDetails'

const SinglePost = () => {
  const params = useParams()
  const id = params.id
console.log(params)
  return (
    <div>{
      id &&
      <PostDetails id={Number(id)} />

    }
    </div>
  )
}

export default SinglePost
