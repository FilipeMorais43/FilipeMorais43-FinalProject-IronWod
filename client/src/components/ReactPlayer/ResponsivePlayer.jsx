import React from 'react';
import ReactPlayer from 'react-player'
import  './ResponsivePlayer.css'
const ResponsivePlayer = ({url}) =>{
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={ url}
            width='100%'
            height='100%'
          />
        </div>
      )  
  }

  export default ResponsivePlayer;