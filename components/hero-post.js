import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-2">
        <CoverImage title={title} url={coverImage.url} slug={slug} />
      </div>
      
    
        <div>
          <div className="mb-0 mx-3 text-xl  font-bold lg:text-xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </div>
          <div className="mb-0 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
       
        <div>
          <p className="text-lg mx-3 leading-relaxed mb-32">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
