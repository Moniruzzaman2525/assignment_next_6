import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import ProductFeed from "@/components/Product/ProductFeed";
import { useRouter } from "next/router";

export default function Home({ products, categories }) {

  return (
    <>
      <Banner />
      <ProductFeed products={products} categories={categories} />
      <ChooseUs />
      <FeedbackForm />
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
