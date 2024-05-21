/* eslint-disable react/no-unescaped-entities */
import video from "../assets/Kokushibo vs Gyomei (Kimetsu no Yaiba) ｜ EDIT ｜ by @animationflipaclip2.088.mp4"

const Main = () => {
    return (
        <div>
            <main className="mb-0 text-white bg-slate-900">
                <section className="flex justify-around">
                    <div className="p-20 pl-10 ml-10 text-4xl font-bold">
                        Helping people make the <br /> world a better place <br /> through quality software. <br />📧💕💕💕
                        <div className="h-16 pt-5 m-5 text-base font-bold text-center text-black bg-white border rounded-full mt-9 w-44 border-slate-300 hover:border-slate-400">
                            <button className="">Read the blog</button>
                        </div>
                        <div className="h-16 pt-5 m-5 text-base font-bold text-center border rounded-full w-44 bg-slate-700 border-slate-300 hover:border-slate-400">
                            <button className="">Take a course</button>
                        </div>
                        <div>
                            <span className="text-xl" >Learn more about Kent➡️➡️➡️</span>
                        </div>
                    </div>

                    <div className="">
                        <div className="container relative p-10 my-5 size-81">
                            {/* <img className="object-cover mx-auto " src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" /> */}
                            <img className="object-cover overflow-visible w-96" src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_playing_soccer_flying_yellow" alt="" />
                        </div>
                    </div>
                </section>

                <section className="flex justify-between m-11" >
                    <div className="p-10 ml-20 w-96 " >
                        {/* <video className="mr-60" src="https://youtu.be/WKK_ysr_lfM?si=iRei5DrnAol0C3hs" 
                        controls> <source src="../assets/Kokushibo vs Gyomei (Kimetsu no Yaiba) ｜ EDIT ｜ by @animationflipaclip2.088.mp4" type="video/mp4" /> </video> */}
                        <video className="mr-60" src={video}
                            controls> <source src={video} type="video/mp4" />
                        </video>
                        <p className="p-2 m-2 font-bold text-red-700">Kokushibo Vs Gyomei <br /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, autem!</p>
                    </div>

                    <div className="p-10 pt-0 m-10 mr-40 ">
                        <span className="text-4xl font-bold " >Hi, I'm Kent C. Dodds. I help people make the world better through quality software.</span> <br /> <br />
                        <span className="pt-10 text-3xl text-gray-400">  I'm also a big extreme sports enthusiast. When I'm not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it's cold.</span> <br />
                        <button className="pt-10 ml-0 text-xl font-bold">Learn more about me ➡️➡️➡️ </button>
                    </div>
                </section>

                <section className="flex justify-around mt-10 bg-gray-800 m-11 pb-11">
                    <div className="pb-10 text-5xl font-bold pt-9 ">
                        Having a hard time <br /> keeping up with <br /> JavaScript? <br />
                        <div className="font-serif pt-96 text-7xl ">
                            {/* blog <br /> courses <br />podcasts */}
                        </div>
                        <div className="pt-40 font-serif text-gray-400 text-7xl">
                            blog <br /> courses <br />podcasts
                        </div>
                    </div>

                    <div className="font-sans text-4xl text-gray-400 pt-9 pb-14">
                        Well, you're in the right <br /> place. My website is your <br /> one stop shop for <br />everything you need to <br /> build JavaScript apps.
                        <div className="pt-40 ">
                            <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_180,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3" alt="image" />
                        </div>
                        <div className="pt-10 text-3xl">
                            Educational blog
                        </div>
                        <div className="text-xl text-gray-400 pt-9">
                            My <b className="text-white">200</b> blog posts (and counting) have been read <br /> 771,367 times by 573,860 people. There you'll find blogs <br /> about JavaScript, TypeScript, React, Testing, your career,<br /> and more.
                        </div>
                        <span className="pt-5 text-lg text-red-600">The <b>Red</b> team is winning.</span>
                        <div className="pt-20 mt-10 text-xl font-bold ">
                            Start reading the blog➡️➡️➡️
                        </div>
                    </div>
                </section>

                <section className="flex justify-around mt-10 m-11 pb-11">
                    <div className="pt-4 mt-20 font-mono text-3xl ">
                        Blog recommendations <br />
                        <p className="text-gray-400"> Prepared especially for you.</p>
                    </div>

                    <div className="pt-20 mt-10 text-xl font-bold">
                        See the full blog➡️➡️➡️
                    </div>
                </section>

                <div className="flex justify-around p-10 m-10">
                    <div className="m-10 ">
                        <img src="https://th.bing.com/th/id/OIP.W74biNCpQY9cLMrBPsi2VAHaNK?pid=ImgDet&w=182&h=322&c=7&dpr=1.5" width={700} alt="" />
                        <div className="mt-5 text-lg text-gray-400">June 5th, 2021 — 11 min read</div>
                        <div className="mt-5 text-xl font-bold ">How to use React Context effectively</div>
                    </div>
                    <div className="m-10">
                        <img src="https://th.bing.com/th/id/OIP.pYybFNHBX4VMo7luuSM7UAHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7" width={700} alt="" />
                        <div className="mt-5 text-lg text-gray-400">April 23rd, 2018 — 6 min read</div>
                        <div className="mt-5 text-xl font-bold ">Migrating to React's New Context API</div>
                    </div>
                    <div className="m-10">
                        <img src="https://th.bing.com/th?id=OIP.fOhIL2a2DZzGahj9h19PygHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" width={700} alt="" />
                        <div className="mt-5 text-lg text-gray-400">July 9th, 2018 — 4 min read</div>
                        <div className="mt-5 text-xl font-bold ">What is JSX?</div>
                    </div>
                </div>

                <section className="flex justify-around mt-10 m-11 pb-11">
                    <div className="pt-4 mt-20 text-3xl ">
                        Are you ready to level up? <br />
                        <p className="text-gray-400">Checkout some of my courses</p>
                    </div>

                    <div className="pt-20 mt-10 text-xl font-bold">
                        See all courses➡️➡️➡️
                    </div>
                </section>

                <section className="pt-40 pb-40 bg-gray-800 rounded-lg m-28 ">
                    <div className="absolute ml-20 -m-52">
                        <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_128,q_auto,f_auto/kentcdodds.com/pages/courses/epic-web-light" alt="" />
                    </div>
                    <div className="pt-3 pl-20 text-4xl font-bold ">
                        Epic Web
                    </div>
                    <div className="pt-4 pl-20 text-4xl text-gray-400">
                        Become a full stack web dev.
                    </div>
                </section>

                <section className="flex justify-center mt-10 pb-11">
                    <div className="pt-40 pb-40 pr-48 mr-3 bg-gray-800 rounded-l-lg m-28">
                        <div className="absolute -m-56 ml-9">
                            <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_128,q_auto,f_auto/kentcdodds.com/pages/courses/rocket" alt="" />
                        </div>
                        <div className="pt-3 pl-20 text-4xl font-bold ">
                            Epic React
                        </div> <br />
                        <div className="pt-4 pl-20 text-4xl text-gray-400">
                            The most <br /> comprehensive <br /> guide for pros.
                        </div>
                    </div>

                    <div className="pt-40 pb-40 ml-3 bg-gray-800 rounded-l-lg pr-28 m-28">
                        <div className="absolute -m-56 ml-9">
                            <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_128,q_auto,f_auto/kentcdodds.com/pages/courses/testing-trophy" alt="" />
                        </div>
                        <div className="pt-3 pl-20 text-4xl font-bold">
                            Testing JavaScript
                        </div> <br />
                        <div className="pt-4 pl-20 text-4xl text-gray-400">
                            Learn smart, <br /> efficient testing <br /> methods.
                        </div>
                    </div>
                </section>

                <section className="flex justify-center p-0 mt-10 rounded-lg m-28 pb-11">
                    <div className="pt-40 pb-40 pr-12 ml-0 mr-3 text-4xl rounded-l-lg pl-9 ">
                        Meet like minded people  who face similar <br /> challenges.
                        <div className="text-4xl text-gray-400 mt-9">
                            Join the discord and get <br /> better at building <br /> software together.
                        </div>
                        <button className="justify-start mt-10 text-lg font-bold">Learn more about the Epic  Web <br /> Community on Discord ➡️➡️➡️
                        </button>
                    </div>


                    <div className="pt-12 pb-40 pl-0 pr-0 ml-3 mr-0 rounded-l-lg">
                        <span className="absolute p-5 -ml-12 text-blue-700 bg-white rounded-full -mt-9">Want to learn React together?</span>
                        <span className="absolute p-5 -ml-12 text-blue-700 bg-white rounded-full mt-9">Let me know💕💕💕</span>
                        {/* <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_650,ar_3:4,q_auto,f_auto/kent/coding-with-kody" alt="" /> */}
                        <img className="overflow-visible" src="https://th.bing.com/th/id/OIP.dh3x3kgn-zpvE5R2GMDwVQAAAA?pid=ImgDet&w=179&h=317&c=7&dpr=1.5" width={680} height={900} alt="" />
                        <span className="absolute p-5 ml-64 text-green-700 bg-green-100 rounded-full -mt-28">For sure! Let's do it!💕💕💕</span>
                        <span className="absolute p-5 ml-40 -mt-10 text-green-700 bg-green-100 rounded-full">
                            Let me show you what I'm working on...🧑‍💻</span>
                    </div>
                </section>

                <section className="flex justify-center pb-5 mt-10 rounded-lg m-28 ">
                    <div className="bg-slate-900 ">
                        {/* <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_650,ar_3:4,q_auto,f_auto/kent/snow-sports" width={1300} height={500} alt="" /> */}
                        <img className="overflow-visible" src="https://www.pngmart.com/files/12/Anime-Render-PNG-Photos.png" width={1200} alt="" />
                    </div>
                    <div className="pl-20 ml-10 pt-7 ">
                        <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_600,q_auto,f_auto/kentcdodds.com/illustrations/snowboard_nqqlyr" width={300} alt="" />
                        <div className="pt-20 pb-40 ml-0 mr-3 text-4xl rounded-l-lg pl-9 ">
                            Big extreme sports enthusiast.
                            <div className="mt-5 text-4xl text-gray-400">
                                With a big heart for helping people.
                            </div>
                            <p className="mt-8 text-base text-gray-400">I'm a JavaScript engineer and teacher and I'm active in the open source community. And I'm also a husband, father, and an extreme sports and sustainability enthusiast.</p>
                            <button className="justify-start mt-10 text-lg font-bold">Learn more about me ➡️➡️➡️
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <hr /> <hr />
        </div>
    )
}

export default Main