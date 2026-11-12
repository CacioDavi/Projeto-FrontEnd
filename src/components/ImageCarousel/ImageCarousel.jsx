import image1 from '/src/assets/caroselImgs/ImgCarosel1.png';
import image2 from '/src/assets/caroselImgs/ImgCarosel2.png';
import image3 from '/src/assets/caroselImgs/ImgCarosel3.png';
import image4 from '/src/assets/caroselImgs/ImgCarosel4.png';
import image5 from '/src/assets/caroselImgs/ImgCarosel5.png';
import CarouselCont from '../CarouselComp/CarouselCont/CarouselCont';
import CarouselItem from '../CarouselComp/CarouselItem/CarouselItem';
import CarouselImg from '../CarouselComp/CarouselImg/CarouselImg';

export const ImageCarousel = () => {
  return (
    <>
    <CarouselCont controls>
      <CarouselItem>
        <CarouselImg imgPath={image1} />
      </CarouselItem>
      <CarouselItem>
        <CarouselImg imgPath={image2} />
      </CarouselItem>
      <CarouselItem>
        <CarouselImg imgPath={image3} />
      </CarouselItem>
      <CarouselItem>
        <CarouselImg imgPath={image4} />
      </CarouselItem>
      <CarouselItem>
        <CarouselImg imgPath={image5}/>
      </CarouselItem>
    </CarouselCont>
    </>
  )
}