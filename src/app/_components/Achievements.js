import Image from "next/image"

export default function Achievements(){
    return <>
        <div className="mt-10 p-5">
            <div className="text-white font-bold text-4xl 2xl:text-6xl text-center mb-10">
                Achievements
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="m-5 w-full sm:w-1/2 lg:max-w-[600px] h-full rounded-2xl border shadow-lg">
                    <div className="flex flex-col p-5">
                        <div className="flex space-x-4 ">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src="/images/developer-prabin.webp"
                                    width={100}
                                    height={100}
                                    alt="profile picture"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col my-auto">
                                <div className="font-semibold">
                                    Prabin Basnet
                                </div>
                                <div className=" font-extralight text-xs text-[#c7c7c7]">
                                    Software Engineer
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 ">
                            Winning the IT Web Code Challenge 2023 organized by the University of Louisiana Monroe!!
                        </div>
                        <div className="mt-5">
                        <div className="w-full">
                                <Image
                                    src="/images/developer-prabin.webp"
                                    width={600}
                                    height={200}
                                    alt="profile picture"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-black m-0 mt-5 flex justify-around bg-white dark:bg-red-500 backdrop-blur-md rounded-lg">
                            <div className=" p-3 rounded-lg hover:cursor-pointer">
                                👍 100k
                            </div>
                            <div className="p-3 rounded-lg hover:cursor-pointer">
                                💬 1k
                            </div>
                            <div className="p-3 rounded-lg hover:cursor-pointer">
                                ⏩ 50k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}