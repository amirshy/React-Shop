import React from "react";
function CommentUser() {
    return (
        <div className="max-w-3xl mx-auto mt-20 ">
            <div className="relative flex items-start border-2 border-red-500 rounded bg-white dark:bg-gray-700">
                <div className="text-center py-8 flex items-center justify-center flex-col md:px-8 pt-20 lg:pt-20 md:pt-20 sm:pt-20 lg:py-8 lg:px-12 mx-4 md:mx-0">
                    <div className="absolute top-5 -mt-8  transform -translate-1/2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-pink-600"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z"></path>
                            <path d="M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z"></path>
                        </svg>
                        <img
                            className="relative rounded-full -mt-4"
                            src="/Logo-Asli (2).png"
                            width="96"
                            height="96"
                            alt="Testimonial 01"
                        />
                    </div>
                    <blockquote className="text-xl text-grayshade-50 font-medium mb-4">
                        “ I love this product and would recommend it to anyone.
                        Could be not easier to use, and our multiple Branch are
                        doing wonderful. We get nice comments all the time. “
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">
                        Darya Finger
                    </cite>
                    <div className="text-grayshade-50">
                        <span>CEO &amp; Co-Founder</span>
                        <a
                            className="text-sky-500 hover:underline"
                            href="https://react-shop-siza.vercel.app/#0"
                        >
                            @Ashon
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentUser;
