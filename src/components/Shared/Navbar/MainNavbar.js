
import { useRouter } from "next/router";
import { useState } from "react";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

function MainNavbar() {
  const router = useRouter();
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setUser(user)
    }
  }, [router]);
  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    router.push('/')
  }
  const addToCartFun = ()=> {
    router.push('/add-to-cart')
  }
  return (
    <div className="fixed left-0 right-0 top-0 py-2  mx-5 dark:glass bg-deepSnow dark:bg-black dark:border-gray drop-shadow-none dark:drop-shadow-none z-99">
      <header className=" inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
        <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
          <div className="flex items-center font-extrabold">
            <button onClick={() => router.push('/')}>
              <img src="https://i.ibb.co/bNr1gnF/07c33adb-c674-4f85-9253-71d7eabd1c6a-removebg-preview.png" alt="07c33adb-c674-4f85-9253-71d7eabd1c6a-removebg-preview" border="0" width='150' />
            </button>
          </div>
          <div className="flex-grow">
          </div>
          
          <div className="flex gap-4">
            <button onClick={addToCartFun} className="flex items-center gap-2">
              <i class="material-icons">shopping_basket</i>  Cart
            </button>
            <div className="flex items-center gap-4">
              <div>
                <i class="material-icons">person</i>
              </div>
              <div>
                <div className="">
                  <h2>Account</h2>
                </div>
                {!user ? <div className="flex text-[11px] gap-1">
                  <button onClick={() => router.push('/sign-up')}>Register</button>
                  <h2>or</h2>
                  <button onClick={() => router.push('/sign-in')}>Login</button>
                </div> : <div className="flex text-[11px] gap-1">
                  <button onClick={() => router.push('/sign-up')}>Profile</button>
                  <h2>or</h2>
                  <button onClick={logOut}>Logout</button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainNavbar;
