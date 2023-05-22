import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import PostCard from '../Posts/PostCard';

const NewsFeed = () => {
  
  const allPosts=useSelector(({posts})=>posts.post)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <h3 style={{margin:"15px 10px"}}>News Feed</h3>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={5000}
        autoPlaySpeed={500}
      >
        {
          allPosts?.length ?
          allPosts.map((post)=><div key={post.id} className="carousel_post"><PostCard data={post}/></div>):
          <p>Add Posts to get News Feed</p>
        }
      </Carousel>
    </div>
  );
};

export default NewsFeed;