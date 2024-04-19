import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <div>
        {/*Section 1*/} 
        <div className='relative mx-auto flex flex-col w-11/12 items-center
                        text-white justify-between max-w-maxContent'>

            <Link to={"/signup"}>
                <div className='group  mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                    transition-all duration-200 group-hover:bg-richblack-900 '>
                        <p>Become an Instructor</p>
                        <FaArrowRight />  
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with 
                <HighlightText text={"Coding Skill"} />
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-inter text-richblack-300   '>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn more
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>
            

            {/* video*/}
            <div className='mx-3 my-12 shadow-[10px_-5px_50px_-5px]  shadow-blue-200'>
                <video
                className='shadow-[20px_20px_rgba(255,255,255)]'
                muted
                loop
                autoPlay>
                    <source src={Banner} type='video/mp4'></source>
                </video>

            </div>

            {/* Code section 1 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock your
                            <HighlightText text={"coding potential"} />
                            with our online courses
                        </div> 
                    }
                    subHeading={
                          "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto:"/signup",
                            active:true,
                        } 
                    }
                    ctabtn2={
                        {
                            btnText: "Learn more",
                            linkto:"/login",
                            active:false,
                        } 
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css"> \n</head>\n<body>\n <h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`
                    }
                    codeColor={"text-yellow-25"}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                /> 

                
            </div>

            {/* Code section 2 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Start
                            <HighlightText text={"coding in seconds"} />
                        </div> 
                    }
                    subHeading={
                          "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto:"/signup",
                            active:true,
                        } 
                    }
                    ctabtn2={
                        {
                            btnText: "Learn more",
                            linkto:"/login",
                            active:false,
                        } 
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css"> \n</head>\n<body>\n <h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`
                    }
                    codeColor={"text-blue-25"}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                /> 

                
            </div>

            <ExploreMore /> 
        </div>

        {/*Section 2*/} 

        <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[333px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col  items-center gap-5 mx-auto mt-14'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex gap-3 items-center'>
                                    Explore Full Catlog
                                    <FaArrowRight/>
                                </div>
                                
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                Learn more
                            </CTAButton>
                        </div>


                    </div>
                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between
                gap-8'>

                    <div className='flex flex-col gap-7 justify-between mb-10 mt-[95px] lg:mt-20 lg:flex-row lg:gap-0 '>
                        <div className='text-4xl font-semibold w-[100%] lg:w-[45%]  '>
                             Get the skills you need for a 
                             <HighlightText text={"Job that is in demand"} />
                        </div>

                        <div className='flex flex-col gap-10 w-[100%] lg:w-[40%] items-start'>
                            <div className='text-[16px]'>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                Learn more
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection />

                    <LearningLanguageSection />

                    
                </div>
                
        </div>


        {/*Section 3*/} 

        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8 mt-12 lg:mt-24 mb-20 bg-richblack-900 text-white">

                <InstructorSection />

                <h2 className='text-center text-4xl font-semibold mt-10'>Reviews from Other Learners</h2>
                <ReviewSlider/>
        </div>


        {/*Footer*/} 
        <Footer />

    </div>
  )
}

export default Home

