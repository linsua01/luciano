
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function PostImages({ images }) {
  console.log(images);
  return (
      
      <Masonry columnsCount={3} gutter={20}>
      {images.map((image) => (
          <div >
            
            <img src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.url} alt={image.title} />
          </div>
       ))}
      </Masonry>
    
    
  )}

