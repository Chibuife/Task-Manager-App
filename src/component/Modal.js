import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { colors } from '../colorVariables'

const Categories = ['Urgent', 'Important', 'Later', 'To study', 'Completed']
const Modal = ({ setModal, setTaskArray }) => {
  const [description, setDescription] = useState()
  const [button, setButton] = useState()
  // console.log(description)
  // console.log(button)


  const addArrayFn = ()=>{
    const existingData = JSON.parse(localStorage.getItem('task'))
    if (description && button){
      setModal(false) 
      if (button !== 'Completed'){
        existingData.push({ description: description, button: button, category: 'Active' })
      }else{
        existingData.push({ description: description, button: button, category: 'Completed' })
      }
      localStorage.setItem('task', JSON.stringify(existingData))
      setTaskArray(JSON.parse(localStorage.getItem('task', JSON.stringify(existingData))))
    }
  }



  return (
    <ModalBody onClick={() => setModal(false) }>
      <ModalChild onClick={e => e.stopPropagation()}>
        <h4>CREATE TASK</h4>
        <input type="text" placeholder='Task description...' value={description} onChange={(e) => setDescription(e.target.value)} />
        <div>
          <div></div>
          <div className='catdesign'><div className='line'></div> <span> Categories</span> <div className='line'></div></div>
          <div></div>
        </div>
        <FlexCategories>
          {
            Categories.map((item, i) => {
              return (
                <div key={i} onClick={() => setButton(item)}> <Button text={item} width={'170px'} borderRaduis={'10px'} height={'25px'} /></div>
              )
            })
          }
        </FlexCategories>
        <div className='submit' onClick={addArrayFn}><Button text={'SUBMIT TASK'} backgroundColor={'white'} color={`${colors.colorTertiary}`} weight={'700'} width={'120px'} borderRaduis={'10px'} border={`2px solid ${colors.colorTertiary}`} /></div> 
      </ModalChild>
    </ModalBody>
  )
}
const ModalBody = styled.div`
// min-height: 100vh;
width: 100%;
// height: 100%;
background-color: rgba(0, 0,0, 0.5);
display: flex;
align-item: center;
justify-content: space-around;
position: absolute;
top:0;
bottom:0;
z-index: 1;

`
const ModalChild = styled.div`
color: white;
width: 50%;
text-align: center;
background-color: ${colors.colorPrimary};
border:2px solid white;
border-radius: 5px;
margin: 3rem 0;
height: 55%; 
input{
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;
  margin-bottom: 1rem;
  border-radius: 5px;
  width: 70%
}

.catdesign{
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1.5rem;
color: white;
font-weight: 700;
span{
  margin-left: 10px; 
  margin-right: 10px; 
}
}
.line{
    width: 40%;
    height: 1px;
    background-color: white;
}
.submit{
 margin: 0 auto;
 width: 110px;
 cursor: pointer;
}
`
const FlexCategories = styled.div`
display: flex;
flex-wrap: wrap;
// background-color: red;
width: 80%;
justify-content: center;
margin: 1rem auto;
> div{
  margin: 0.5rem;
  cursor:pointer;
}

`
export default Modal