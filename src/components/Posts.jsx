import AddPost from './AddPost';
import Post from './Post';
import React from 'react'

const Posts = ({ posts, onCreate, onRemove }) => {
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} onRemove={onRemove} />)}
    </section>
  )
}

export default Posts;
