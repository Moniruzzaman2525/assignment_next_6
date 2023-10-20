import Card from '@/components/Shared/AddToCart/Card';
import { useGetAddToCartProductsQuery } from '@/redux/features/addToCard/addToCard';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index = () => {
    const router = useRouter()
    const {data, isLoading, isError} = useGetAddToCartProductsQuery()
    console.log(data.data);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const accessToken = localStorage.getItem("accessToken");
            const refreshToken = localStorage.getItem("refreshToken");
            if (!accessToken && !refreshToken) {
                router.push('/sign-in');
            }
        }
    }, [router]);
    return (
        <div className='mt-20'>
            <Card />
        </div>
    );
};

export default Index;