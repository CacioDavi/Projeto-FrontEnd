import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
`;

export const Breadcrumb = styled.p`
  font-size: 14px;
  color: #474747;
  margin-bottom: 30px;
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductInfo = styled.div`
  h1 {
    font-size: 28px;
    color: #1f1f1f;
    margin: 0 0 12px;
  }

  h2 {
    font-size: 32px;
    color: #1f1f1f;
    margin: 20px 0;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }

  span {
    color: #474747;
    font-weight: 600;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  color: #474747;
  margin: 24px 0 12px;
`;

export const RelatedTitle = styled.h2`
  font-size: 24px;
  color: #474747;
  margin: 60px 0 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  label:not(.color-option) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    color: #474747;
  }

  input {
    display: none;
  }

  label:has(input:checked) {
  background-color: #c92071;
  border: 2px solid #c92071;
  color: #ffffff;
  transition: all 0.3s ease;
}
`;

export const BuyButton = styled.div`
  margin-top: 40px;

  button {
    background-color: #c92071;
    color: #ffffff;
    border: none;
    padding: 12px 50px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      background-color: #991956;
      transform: translateY(-3px);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const ColorOption = styled.label`
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 3px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 0.3s ease;

  input {
    display: none;
  }

  span {
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }

  &:has(input:checked) {
    border: 1px solid #c92071;
  }
`;