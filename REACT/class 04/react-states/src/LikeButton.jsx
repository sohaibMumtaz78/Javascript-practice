import { useState } from "react"

function LikeButton() {
    let [isLike, setIslike] = useState(false)
    let togglebtn = () => {
        // console.log("togglebtn")
        setIslike(!isLike)
    }
    return (
        <div>
            {/* <p onClick={togglebtn} >
                {isLike.toString()}
                <i className="fa-regular fa-heart"></i>
            </p> */}

            <p onClick={togglebtn} >
                {isLike ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}

export default LikeButton