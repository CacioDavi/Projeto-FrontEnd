
import { CardBox, PDiscountRate, PName, PDetails, PPrices,
  PPrice, PDiscountedPrice, PImage, PCategory } from './style';
import { useNavigate } from 'react-router-dom';

function Card({ProductName="K-Swiss V8 - Masculino", ProductCategory = "Tênis", DiscountRate = 30, 
  ProductImage = "/src/assets/sapato.png", Prices=[100,200], 
  URL='/', data=null}) {
  // const Navigate = useNavigate();
  // function RedirectToPkmInfo() {
  //   Navigate({URL}, {state: JSON.stringify(data)});
  // }
  
    return (
        <CardBox onClick={() => console.log('Redirecting...')} role='button'>
          <PDiscountRate>{DiscountRate}% OFF</PDiscountRate>
          <PImage src={ProductImage}
            alt={ProductName}
            loading='lazy'/>
          <PCategory>{ProductCategory}</PCategory>
          <PName>{ProductName}</PName>
          <PDetails>
            <PPrices>
              {Prices[0] === undefined && <PPrice>${Prices[1]}</PPrice>}
              {Prices[0] !== undefined && 
              <>
                <PPrice $hasDiscount={true}>${Prices[1]}</PPrice>
                <PDiscountedPrice>${Prices[0]}</PDiscountedPrice>
              </>
              }
            </PPrices>
          </PDetails>
        </CardBox>
    )
}

export default Card;