import React from 'react';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

const Product = ({ product: { name, id, price, description, photo } }) => (
  <ItemStyles>
    <img src={photo.image.publicUrlTransformed} alt={name} />
    <Title>
      <Link href={`/product/${id}`}>{name}</Link>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id,
            },
          }}
        >
          Edit ✏
        </Link>
      </div>
    </Title>
  </ItemStyles>
);

export default Product;
