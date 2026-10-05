// "use client"
// import Image from "next/image";
// import { useState } from "react";

// const Brand3 = () => {

//     const [isActive, setIsActive] = useState('monthly');

//     return (
// <section className="used-technology-section section-padding fix pt-0">
//         <div className="container">
//             <div className="section-title style-4 mxw-670 mx-auto text-center">
//                     <h2 className="title">Technologies Behind Our Solutions.</h2> 
//             </div>
//             <ul className="nav brand-nav-area">
//                 <li className={`nav-item wow fadeInUp ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}  data-wow-delay=".3s">
//                     <a href="" data-bs-toggle="tab" className="nav-link">
//                         Front End
//                     </a>
//                 </li>
//                 <li className={`nav-item wow fadeInUp ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  data-wow-delay=".5s">
//                     <a href="" data-bs-toggle="tab" className="nav-link">
//                         Back End
//                     </a>
//                 </li>
//             </ul>
//             <div className="tab-content">
//                 <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="End" >
//                     <div className="technology-box-items-wrapper style-4 mt-0">
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/01.png" alt="img" width={43} height={60}   />
//                             </div>
//                             <div className="title">HTML5</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/05.png" alt="img" width={43} height={60}   />
//                             </div>
//                             <div className="title">CSS3</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/02.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">Sass</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/04.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">Next.js</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/06.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">JavaScript</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/03.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">React</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/07.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">TypeScript</div>
//                         </div>                       
//                     </div>
//                 </div>
//                 <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="Back" >
//                     <div className="technology-box-items-wrapper style-4 mt-0">
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/01.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">HTML5</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/05.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">CSS3</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/02.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">Sass</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/04.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">Next.js</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/06.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">JavaScript</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/03.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">React</div>
//                         </div>
//                         <div className="technology-box-items style-4">
//                             <div className="logo"> 
//                             <Image src="/assets/images/tag/07.png" alt="img" width={50} height={50}   />
//                             </div>
//                             <div className="title">TypeScript</div>
//                         </div>                       
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     );
// };

// export default Brand3;

"use client"
import Image from "next/image";
import { useState } from "react";

const frontEndTech = [
    { name: "HTML5", img: "01", w: 43, h: 60 },
    { name: "CSS3", img: "05", w: 43, h: 60 },
    { name: "Sass", img: "02", w: 50, h: 50 },
    { name: "Next.js", img: "04", w: 50, h: 50 },
    { name: "JavaScript", img: "06", w: 50, h: 50 },
    { name: "React", img: "03", w: 50, h: 50 },
    { name: "TypeScript", img: "07", w: 50, h: 50 },
];

// img = /public/assets/images/tag/ mein file ka naam (extension ke baghair)
const backEndTech = [
    { name: "Node.js", img: "08", w: 50, h: 50 },
    { name: "Express", img: "09", w: 50, h: 50 },
    { name: "MongoDB", img: "10", w: 50, h: 50 },
    { name: "MySQL", img: "11", w: 50, h: 50 },
    { name: "PHP", img: "12", w: 50, h: 50 },
    { name: "Laravel", img: "13", w: 50, h: 50 },
];

const tabs = [
    { key: "frontend", label: "Front End", delay: ".3s", items: frontEndTech },
    { key: "backend", label: "Back End", delay: ".5s", items: backEndTech },
];

const Brand3 = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section className="used-technology-section section-padding fix pt-0">
            <div className="container">
                <div className="section-title style-4 mxw-670 mx-auto text-center">
                    <h2 className="title">Technologies Behind Our Solutions.</h2>
                </div>

                <ul className="nav brand-nav-area" role="tablist">
                    {tabs.map((tab) => (
                        <li
                            key={tab.key}
                            className={`nav-item wow fadeInUp ${activeTab === tab.key ? "active" : ""}`}
                            data-wow-delay={tab.delay}
                            role="presentation"
                        >
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === tab.key}
                                className="nav-link"
                                onClick={() => setActiveTab(tab.key)}
                                style={{ border: "none", cursor: "pointer" }}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-content">
                    {tabs.map((tab) => (
                        <div
                            key={tab.key}
                            className={`tab-pane ${activeTab === tab.key ? "active" : ""}`}
                            id={tab.key}
                            role="tabpanel"
                        >
                            <div className="technology-box-items-wrapper style-4 mt-0">
                                {tab.items.map((item) => (
                                    <div className="technology-box-items style-4" key={item.name}>
                                        <div className="logo">
                                            <Image
                                                src={`/assets/images/tag/${item.img}.png`}
                                                alt={item.name}
                                                width={item.w}
                                                height={item.h}
                                            />
                                        </div>
                                        <div className="title">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brand3;