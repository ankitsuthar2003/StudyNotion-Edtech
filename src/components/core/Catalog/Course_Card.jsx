import React,{useState ,useEffect} from 'react'
import {Link} from "react-router-dom"
import RatingStars from "../../common/RatingStars"
import GetAvgRating from "../../../utils/avgRating"



const Course_Card = ({course, Height}) => {

        const [avgReviewCount, setAvgReviewCount] = useState(0);

        useEffect(() => {
            // console.log("Course", course.courseName)
            const count = GetAvgRating(course.ratingAndReviews);
            // console.log("Rating count", count)
            setAvgReviewCount(count)
        },[course])


  return (
    <div>
        <Link to={`/courses/${course._id}`}>
            <div>
                <div className="rounded-lg">
                    <img
                        src={course?.thumbnail}
                        alt='Course Thumbnail'
                        className={`${Height} w-full rounded-xl object-cover`}
                    />
                </div>
                <div className="flex flex-col gap-2 px-1 py-3">
                    <p className="text-xl text-richblack-5">{course?.courseName}</p>
                    <p className="text-sm text-richblack-50"> {course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-5">{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount}/>
                        <span  className="text-richblack-400">{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p className="text-xl text-richblack-5">Rs. {course?.price}/-</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Course_Card