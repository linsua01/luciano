import PostPreview from './post-preview'
import PostPreviewFull from './post-preview-full'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
//<div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
export default function MoreStories({ posts }) {
  let items = [];
  
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <Masonry columnsCount={2} gutter={20}>
        {posts.map((post) => (
    
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
           /> ) 
           
           
        )}
        </Masonry>
      
    </section>
  )
}
