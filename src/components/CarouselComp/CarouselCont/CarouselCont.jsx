
import CarouselControls from "../CarouselControls/CarouselControls";
import CarouselImgSelector from "../CarouselImgSelector/CarouselImgSelector";
import { Container, Lista } from "./style";

import { useState } from "react";

export default function CarouselCont({ children, controls = false, interval = 0 }) {
  const [cur, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  function changeImage(index) {
    setFade(true);

    setTimeout(() => {
      setIndex(index);
      setFade(false);
    }, 200);
  }

  function next() {
    const nextIndex = cur === children.length - 1 ? 0 : cur + 1;
    changeImage(nextIndex);
  }

  function prev() {
    const prevIndex = cur === 0 ? children.length - 1 : cur - 1;
    changeImage(prevIndex);
  }

  const ImgPathList = children.map((i) => {
    return i.props.children.props.imgPath;
  });

  return (
    <Container>
      <Lista>
        {controls && (
          <CarouselControls next={next} prev={prev} />
        )}

        <div className={fade ? "fade" : ""}>
          {children[cur]}
        </div>
      </Lista>

      <CarouselImgSelector
        images={ImgPathList}
        cur={cur}
        setIndex={changeImage}
      />
    </Container>
  );
}
