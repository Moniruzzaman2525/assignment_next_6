import Card from "@/components/Shared/SingleCard/Card";
import { useState } from "react";

const ProductDetails = ({ item }) => {
    const [routePath, setRoutePath] = useState('abcd')
    // getStaticPaths(routePath)
    return (
        <div>
            <Card item={item} />
        </div>
    );
};

export default ProductDetails;

export const getStaticPaths = async () => {
    const res = await fetch(`https://gadget-galaxy-server-seven.vercel.app/api/v1/product/get-product`)
    // const res = await fetch(`http://localhost:5000/api/v1/product/get-product`)

    const datas = await res?.json()
    const data = datas?.data
    const paths = data?.map((pro) => ({
        params: { productId: pro._id }
        
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://gadget-galaxy-server-seven.vercel.app/api/v1/product/get-product/${params.productId}`)
    // const res = await fetch(`http://localhost:5000/api/v1/product/get-product/${params.productId}`)
    const data = await res.json()
    return {
        props: {
            item: data
        }
    }
}
