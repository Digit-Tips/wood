import React from "react";
import './Finished.css'


function Image({ src, alt, details }) {
    const [showDetails, setShowDetails] = React.useState(false);
  
    return (
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <img src={src} alt={alt} />
        {showDetails && <div><img src={details} alt={alt} /></div>}
      </div>
    );
  }
  
  // Parent component
  function ImageGallery() {
    const images = [
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-img.png',
        alt: 'image 1',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-img.png',
        alt: 'image 2',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-img.png',
        alt: 'image 3',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-img.png',
        alt: 'image 4',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-img.png',
        alt: 'image 5',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-img.png',
        alt: 'image 6',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png'
      },
      {
        src: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/7.png',
        alt: 'Film faced plywood',
        // details: 'Image 2 details'
      },
      // Add more images here
    ];
  
    return (
      <div className="hoverImg" >
        {images.map(image => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            details={image.details}
          />
        ))}
      </div>
    );
  }
  export default ImageGallery;