import { Img } from './style'

export default function CarouselImg({imgPath, imgAlt}) {

  return (
    <>
        <Img src={imgPath} alt={imgAlt} />
    </>
  );
}
