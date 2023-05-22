import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import tick from '../image/tickIcon.svg'
import { colors } from '../colorVariables'

function TaskBar({ description, button }) {
  return (
    <TaskBarStyle color={button} >
      <div className='verified'>
        <img src={tick} width={12} alt="" />
      </div>
      <div className='description'>{description}</div>
      <div className='button'>
        <div className='lgBtn'><Button text={button} width={'120px'} borderRaduis={'10px'} height={'25px'} /></div>
      </div>
      <div className='smBtn'>  <div>{button}</div> </div>
      <div className='ex'></div>
    </TaskBarStyle>
  )
}
const TaskBarStyle = styled.div`
// background-color: red;
position: relative;
// overflow: hidden;
display: flex;
justify-content: space-between;
background-color: ${colors.colorPrimary};
color: #E4E4E4;
padding:  1rem ;
.description{
  width: 200px;
}
    @media (min-width: 800px) {
.description{
  width: auto;
}
  }
   @media (max-width: 800px) {
  font-size: 1rem;
  
  }
.verified{
  background-color: #4CAF50;
 border-radius:100%;
 height: 25px;
 width: 25px;
display: flex;
justify-content: space-around;
align-item:center;
cursor: pointer;
margin-right: 1rem
}
.button{
   @media (max-width: 800px) {
  display: none;
  }
  
}
  .smBtn{
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    width: 50px;
    position: absolute;
    right: 0%;
      min-height: 100px;
    background-color:
${({ color }) =>
    color == 'Completed' ? "#4CAF50" :
      color == 'Important' ? "#FFC107" :
        color == 'Later' ? "#9C27B0" :
          color === 'To study' ? "#25A7B8" :
              color === 'Urgent' ? "#FF5252" : ""};
  
                >div{
      transform: rotate(-90deg);
  }
     @media (min-width: 800px) {
  display: none;
  }
  }
  .ex{
    width: 100px;
           height: 70px;
               @media (min-width: 800px) {
  display: none;
  }
  }

`

export default TaskBar