import { db } from '@/lib/db'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/config'
import PostFeed from './PostFeed'

const GeneralFeed = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      subreddit: true,
    },
    take: INFINITE_SCROLLING_PAGINATION_RESULTS, // 4 to demonstrate infinite scroll, should be higher in production
  })

  return <PostFeed initialsPosts={posts} />
}

export default GeneralFeed