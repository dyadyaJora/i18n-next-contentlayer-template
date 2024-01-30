import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home({ params: { lng } }: any) {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
      .filter((post) => {
        return post.lng === lng
      }).map((post) => (
        <article key={post._id}>
          <Link href={"/"+lng+post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
