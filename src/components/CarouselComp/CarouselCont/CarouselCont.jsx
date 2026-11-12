import CarouselControls from "../CarouselControls/CarouselControls";
import CarouselImgSelector from "../CarouselImgSelector/CarouselImgSelector";
import { Container, Lista } from "./style"

import { useState } from "react";

export default function CarouselCont({children, controls = false, interval = 0}) {
  const [cur, setIndex] = useState(0)

  function next() {
    if(children.length !== (cur + 1)) {
      setIndex(cur + 1);
    }
    else {
      setIndex(0)
    }
  }

  function prev() {
    if((cur - 1) >= 0) {
      setIndex(cur - 1);
    }
    else {
      setIndex(children.length - 1)
    }
  }

const ImgPathList = children.map((i) => {
  const paths = i.props.children.props.imgPath;
  return paths;
})

  return (
    <Container>
      <Lista>
        {controls && (
          <CarouselControls next={next} prev={prev}/>
        )}
          {children[cur]}
      </Lista>
      <CarouselImgSelector images={ImgPathList} cur={cur} setIndex={setIndex} />
    </Container>
  );
}
