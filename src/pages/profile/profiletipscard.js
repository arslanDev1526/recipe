import React from 'react'
import { Link } from 'react-router-dom'
import supabase from '../../config/client'

const ProfileTipsCard = ({tip, onDelete}) => {

    const handleDelete =  async ()=>{ 

        const {data, error} = await supabase
        .from("tips")
        .delete()
        .eq('id', tip.id)
        .select()
        
        if(error){ 
            console.log(error)
        }
        
        if(data){ 
            console.log(data);
            onDelete(tip.id)
        }

        
    }
  return (
   <> 
   <div className='border border-primary my-3'> 


    <h2>{tip.title}</h2>
    <p>{tip.description}</p>
    <img className='w-50' src='https://drinksnfoods.com/wp-content/uploads/2023/03/Joanna-Gaines-Beef-Tips-Recipe.jpg'/> 
   
    <Link to={'/' + tip.id } > 
    <button> Edit </button>
   
    </Link>

    <button onClick={handleDelete}> Delete</button>
   </div>
   
   </>
  )
}

export default ProfileTipsCard