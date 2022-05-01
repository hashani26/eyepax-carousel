import { useEffect, useState } from 'react';
import Carousel from "../Components/Carousel";
import axios from "axios";
import { useParams } from "react-router-dom";

function CarouselContainer() {

  const params = useParams();
  const [slides, setSLides] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const route = `http://localhost:3600/api/carousel`
        const imageArr = await axios.get(route, { params: { slides: params.slides } });
        setSLides(imageArr.data)
      } catch (error) {
        setSLides([])
      }

    })()
  }, [])

  return (
    <>
      {
        slides.length === 0 ? <div>No images</div>
          :
          <Carousel slides={slides} />
      }
    </>
  );
}

export default CarouselContainer;
