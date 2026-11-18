import { ButtonImg, CarButton, ControlsContainer } from "./style"

import arrowLeft from "../../../assets/CaroselArrow/left.png"
import arrowRight from "../../../assets/CaroselArrow/right.png"

export default function CarouselControls({next, prev}) {
  return (
    <ControlsContainer>
        <CarButton onClick={prev} type="button">
            <ButtonImg src={arrowLeft} />
        </CarButton>

        <CarButton onClick={next} type="button">
            <ButtonImg src={arrowRight} alt="" />
        </CarButton>
    </ControlsContainer>
  );
}
