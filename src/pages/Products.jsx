import React from "react";
import Layout from "@containers/Layout";
import CardsContainer from "@containers/CardsContainer";
import CardProduct from "@components/CardProduct";
import Headers from "@components/Headers";
const Products = () => {
  return (
    <Layout>
      <Headers />
      <CardsContainer>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </CardsContainer>
    </Layout>
  );
};

export default Products;
