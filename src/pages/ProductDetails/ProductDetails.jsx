import Card from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";

import Button from "../../components/Button/Button";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";

export default function ProductDetails() {
  return (
    <>
    <form action="">
      <ImageCarousel/>
      <p>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
      <img src="" alt="" />
      <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
      <p>Casual | Nike | REF:38416711</p>
      <p>⭐⭐⭐⭐⭐ <span>4,7⭐</span> (90 avaliações)</p>
      <p>R$ 219,00  <s>219,00</s> </p>
      <p>Descrição do produto</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid numquam, 
        error tenetur dolore deserunt tempora. Repudiandae at molestiae recusandae vero 
        culpa error voluptates quia, dolor veritatis quo, fugiat maiores?
      </p>

      <p>Tamanho</p>
      <div>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>38</span>
        </label>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>39</span>
        </label>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>40</span>
        </label>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>41</span>
        </label>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>42</span>
        </label>
        <label>
          <input type="radio" name="size" value={38}/>
          <span>43</span>
        </label>
      </div>
      <p>Cor</p>
      <div>
        <Button>.</Button>
        <Button>.</Button>
        <Button>.</Button>
        <Button>.</Button>
        <Button>.</Button>
      </div>

      <button>g</button>
      </form>


      <h2>Produtos Relacionados</h2>
      <CardList>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </CardList>
    </>
  );
}
