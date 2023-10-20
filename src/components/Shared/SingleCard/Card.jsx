import React from 'react';
import KeyFeatures from './KeyFeatures';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = ({item}) => {
    const router = useRouter();
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setUser(user)
    }
  }, [router]);
  const buyNowProduct = () => {
     console.log(user);
    if (user) {
        
    }else {
        router.push('/sign-in')
    }
  }
    return (
        <div>
            <div className=" shadow-2xl  rounded-xl p-8  mt-20 flex-1 w-full">
                <div className="grid px-10 grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="">
                        <div>
                            <img
                                src={item?.image}
                                alt={item?.image}
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h4 className="">
                            <div className='bold py-10 uppercase text-3xl text-center'>
                                {item?.name}
                            </div>
                        </h4>
                        
                        <div className="text-lg">
                            {item?.keyFeatures?.map((feature, featureIndex) => (
                                <KeyFeatures key={featureIndex} item={feature} />
                            ))}
                        </div>
                        <div className="text-center text-xl py-3 text-red-600 pb-5">
                            <span>${item?.price}</span>
                        </div>
                        <div onClick={buyNowProduct} className="flex flex-col mt-20 gap-5">
                            <button className="flex items-center justify-center gap-2" type="button">
                                <i className="material-icons">shopping_cart</i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;