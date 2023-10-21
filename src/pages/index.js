import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ProductFeed from "@/components/Product/ProductFeed";
import { wrapper } from "@/redux/app/store";
import categoriesApi from "@/redux/features/categories/categoriesApi";
import productApi from "@/redux/features/product/productApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({ products, categories }) {
  const router = useRouter();

  return (
    <>
      <Banner />
      <ProductFeed products={products} categories={categories} />
      <ChooseUs />
    </>
  );
}

// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   const products = await store.dispatch(
//     productApi.endpoints.getProducts.initiate()
//   );

//   const categories = await store.dispatch(
//     categoriesApi.endpoints.getCategories.initiate()
//   );

//   return {
//     props: {
//       products,
//       categories,
//     },
//   };
// });
