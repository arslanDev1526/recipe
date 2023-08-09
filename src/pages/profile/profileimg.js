import React from 'react'
import styles from "./profile.module.css";


const ProfileImg = () => {
  return (
   <> 
   
   <div className="bg-white py-4 mt-5 w-75">
          <div className="d-flex gap-4 mx-4">
            <img
              className={` mt-3 ${styles["profile-img"]} `}
              src="https://img-global.cpcdn.com/users/ce62491fd3e07cc8/108x108cq50/avatar.webp"
            />

            <div>
              <h3> arslan younas </h3>
              <p> @arslan_react </p>
              <button className={` border-1 rounded ${styles.btn}`}>
                {" "}
                View Public Profile{" "}
              </button>
            </div>
          </div>
        </div>
   </>
  )
}

export default ProfileImg;