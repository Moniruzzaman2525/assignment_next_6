import React from 'react';

const FeedFrom = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-2 gap-4 bg-[#f5f5f5] p-5 rounded-lg '>
                <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Your Name
                    </label>
                    <input
                        name="name"
                        required
                        type="name"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-dark dark:placeholder-white dark:text-white"
                    />
                </div>
                <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Your Email
                    </label>
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-dard dark:placeholder-white dark:text-white"
                    />
                </div>
            </div>
            <div className='bg-[#f5f5f5] p-5 rounded-lg '>
                <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Your Comments
                    </label>
                    <textarea
                        name="Comments"
                        required
                        type="Comments"
                        placeholder="Enter your Comments"
                        className="w-full resize-none rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-dark dark:placeholder-white dark:text-white"
                    />
                </div>
            </div>
            <div className='bg-[#f5f5f5] p-5 rounded-lg '>
                <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Your Suggestions
                    </label>
                    <textarea
                        name="Suggestions"
                        required
                        type="Suggestions"
                        placeholder="Enter your Suggestions"
                        className="w-full resize-none rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-drak dark:placeholder-white dark:text-white"
                    />
                </div>
            </div>
            <div className='flex justify-center py-2'>
                <button
                    className="button border-0 lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center"
                >
                    Send Feedback
                </button>
            </div>
        </div>
    );
};

export default FeedFrom;