import styled, { css } from 'styled-components'

const CardBasicStyles = css`
    display: flex;
    flex-direction: column;
`
const SmallFont = css`
    font-size: .8rem;
`
const MediumFont = css`
    font-size: .9rem;
`
const LargeFont = css`
    font-size: 1.2rem;
`

const CardBox = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;

    border: 1px red solid;
    margin: 0;
    padding: .2rem;

    box-shadow: 0 .4rem 5px 3px rgba(0,0,0, .1);

    position: relative;
`;

const PDiscountRate = styled.span`
    align-self: flex-start;
    ${SmallFont}

    background-color: #E7FF86;
    border-radius: 12px;
    padding: .2rem .5rem;

    margin: .3rem .3rem 0;

    position: absolute;
`

const PCategory = styled.span`
    ${SmallFont}
    color: #555;
`

const PName = styled.span`
    ${LargeFont}
    
    text-transform: capitalize;
`

const PDetails = styled.div`
    display: flex;

`
const PPrices = styled.span`
    display: flex;
    padding: 0;
`

const PriceFormat = css`
    text-align: center;
    text-transform: capitalize;

    ${MediumFont}

    padding: .2rem .1rem;

    max-width: 3.5rem;
`

const PPrice = styled.span`
    text-decoration: ${props => props.$hasDiscount === true ? 'line-through' : 'none'};
    font-weight: ${props => props.$hasDiscount === true ? 'unset' : 'bold'};
    color: ${props => props.$hasDiscount === true ? '#555' : '#000'};
    ${PriceFormat} 
`
const PDiscountedPrice = styled.span`
    font-weight: bold;
    ${PriceFormat}
`

const PImage = styled.img`

`

export { 
    CardBox, PDiscountRate, PName, PCategory, PDetails, PPrices,
    PPrice, PDiscountedPrice, PImage
}