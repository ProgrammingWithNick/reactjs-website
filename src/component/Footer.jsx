/* eslint-disable react/no-unescaped-entities */


const Footer = () => {
    return (
        <footer className='relative mt-10 text-xs text-white py-7 bg-slate-950'>

            <div className="flex justify-around mx-0 mt-10 pb-11">
                <div className="pl-10 text-2xl ">
                    Hii I'm A Web Developer
                    <div className="pt-5 text-gray-400 ">
                        Full time educator making our world <br /> better
                    </div>
                </div>
                <div className="ml-2 text-lg">
                    Contact
                    <div className="pt-5 text-gray-400 ">
                        Email Kent <br />
                        Call Kent <br />
                        Office hours <br />
                    </div>
                </div>
                <div className="text-lg">
                    General
                    <div className="pt-5 text-gray-400 ">
                        My Mission <br />
                        Privacy policy <br />
                        Terms of use <br />
                        Code of conduct <br />
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-10 pb-11 ">
                <div className="pl-0 text-lg font-bold ml-36 ">
                    Stay up to date
                    <div className="pt-5 text-gray-400 ">
                        Subscribe to the newsletter to stay up to date with <br /> articles, courses and much more! <br />Learn more about the newsletter
                    </div>

                    <div className="my-5">
                        <div className="my-3">
                            <label htmlFor="name">First Name</label>
                        </div>

                        <div>
                            <input type="text" className="w-full py-4 bg-gray-800 rounded-tl-lg" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="email">Email</label>
                        </div>

                        <div>
                            <input type="text" className="w-full py-20 bg-gray-800 rounded-tl-lg" />
                        </div>

                    </div>

                </div>



                <div className="pl-10 text-lg font-bold mr-44">
                    Sitemap
                    <div className="py-2 mt-1 text-gray-400 underline cursor-pointer hover:underline-offset-4">
                        Home <br />
                        Blog <br />
                        Courses <br />
                        Discord <br />
                        Chats Podcast <br />
                        Workshops <br />
                        Talks <br />
                        Testimony <br />
                        Testimonials <br />
                        About <br />
                        Credits <br />
                        Sitemap.xml <br />
                    </div>
                </div>

            </div>
            <button className="p-5 mt-10 ml-40 font-bold text-black border rounded-full bg-lime-200 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">Click Me!!!</button>
            <div className="font-bold text-center">Copyright ©️ website | All rights reserved</div>

        </footer>
    )
}

export default Footer