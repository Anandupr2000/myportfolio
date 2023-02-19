import React from "react";

const Education = () => {
    return (
        <div className="h-screen flex flex-col items-center mt-12 gap-20">
            <h2 className="mt-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Education</h2>
            <div className="flex flex-col">
                <div className="w-3/4 md:w-full">
                    <div className="relative">
                        <div className="bg-gray-300 h-1 w-1/2 md:w-1/3 absolute top-32 -left-[3rem] md:-left-[4.5rem] rotate-90 mt-8 md:mt-5" />
                        <div className="flex flex-row">
                            <div className="p-4 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                               <div className="flex-1 ml-4 space-y-5">
                                <h3 className="text-4xl font-semibold">Master of Computer Application</h3>
                                <p className="text-gray-700">
                                    MCA, ABC University
                                </p>
                                <p className="text-gray-600">2021 - present</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 md:w-full">
                    <div className="relative md:my-24">
                    <div className="bg-gray-300 h-1 w-1/2 md:w-1/3 absolute top-32 -left-[3rem] md:-left-[4.5rem] rotate-90 mt-8 md:mt-5" />
                        <div className="flex flex-row">
                            <div className="p-4 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 ml-4 space-y-5">
                                <h3 className="text-4xl font-semibold">Bachelor of Science</h3>
                                <p className="text-gray-700">
                                    Computer Science, XYZ University
                                </p>
                                <p className="text-gray-600">2017-2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education