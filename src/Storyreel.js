import userEvent from '@testing-library/user-event';
import React from 'react';
import Add_story from './Add_story';
import { useStateValue } from './StateProvider';
import Story from './Story';
import "./Storyreel.css";


function Storyreel() {
    const [{ user }] = useStateValue();
    return (
        <div className='storyReel'> 


            <Add_story 
            image={user.photoURL}
            />

            <Story
            image='https://upload.wikimedia.org/wikipedia/en/c/cb/Robert_Downey_Jr._as_Iron_Man_in_Avengers_Infinity_War.jpg'
            profilesrc="https://img.cinemablend.com/filter:scale/quill/d/9/5/a/c/9/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg?mw=600"
            title="Tony Stark"
            />

            <Story 
            image='https://timesofindia.indiatimes.com/thumb/msid-71273471,width-1200,height-900,resizemode-4/.jpg'
            profilesrc="https://akns-images.eonline.com/eol_images/Entire_Site/2013924/rs_600x600-131024111413-600.captain-america-2.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top"            
            title="Captain America"
            />

            <Story 
            image='https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg'
            profilesrc="https://i.pinimg.com/originals/dc/07/7f/dc077fb9253b756cfbd86a2d7ac1dca9.jpg"            
            title="Hulk"
            />

            <Story 
            image='https://media.vanityfair.com/photos/5a57a029b16ba04a7fe0172b/1:1/w_1184,h_1184,c_limit/Black-Widow.jpg'
            profilesrc="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/11/29/Pictures/_66d491ea-1272-11ea-a64f-e20fcd3bbcc8.jpg"            
            title="Black widow"
            />

            
            

        </div>
    )
}

export default Storyreel

