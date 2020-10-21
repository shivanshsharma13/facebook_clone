 import React from 'react'
 import "./Add_story.css"
 import AddIcon from "@material-ui/icons/Add";

 function add_story({image}) {
     return (
         <div className="add_story" style={{backgroundImage: `url(${image})`}}>
            <AddIcon fontSize="medium" className="add_story__avatar"/>
            <h5>Create a story</h5>

        </div>

     )
 }
 
 export default add_story
 