import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import OpenModalButton from "../OpenModalButton"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"



const AllFavriteLists = () => {

    // const store = useSelector((store) => store)
    // console.log (store, '-----------this is store')
    let allFavLists = useSelector((store) => store?.favoriteList)
    allFavLists = Object.values(allFavLists)
    console.log (allFavLists, '------------thesea are the favoriteList')
    return <>
        {allFavLists.map((list) => {
            return(
               <div>
                <p>List Name: {list.name}</p>
                {list.jobs.map((job) => {
                    return (
                      <p key={job.id}>{job.position}</p>  
                    )
                    
                })}
            </div> 
            )
            
        })}
    </>
}
export default AllFavriteLists