import { ThumbList } from "./style";

export default function CarouselImgSelector({images = [], cur, setIndex}) {
  return (
    <ThumbList>
      {images.map((image, index) => {
        return (
          <li key={image}>
            <label>
              <input type="radio" name="ImgSelector" checked={cur === index} onChange={() =>  setIndex(index)}/>
              <img src={image} alt="" />
            </label>
          </li>
        )
      })}
    </ThumbList>
  );
}
