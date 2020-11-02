import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { SHOW_DATE } from '@/lib/constants'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-2">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="text-xl font-bold items-center mx-3 mb-0 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </div>
      {SHOW_DATE ? 
      (<div className="text-lg mb-4">
        <Date dateString={date} />
      </div>) : ('')}
      <p className="text-1lg leading-relaxed mx-3 mb-6">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
