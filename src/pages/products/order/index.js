import { useGetOrderProductQuery } from '@/redux/features/addToCard/addToCard';
import React from 'react';

const Index = () => {
    const {data, isLoading, isError} = useGetOrderProductQuery()
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Index;