import React, { useState } from 'react'
import styled from "styled-components"
import sun from '../image/sun.svg'
import Modal from './Modal'
import { colors } from '../colorVariables'
import { useDispatch } from 'react-redux'
import { switchMode } from '../store/modeSlice'

const PageLayout = ({ children, modal, setModal, setTaskArray }) => {
const dispatch = useDispatch()
  return (
    <>
    <Body>
        {modal && <Modal setTaskArray={setTaskArray} setModal={setModal} />}
      <BodyChild>
        <h1>Personal <div> Task Manager</div></h1>
          <div className='addBtn' onClick={() => setModal(true)}>Add New Task</div>
          <div className='img' onClick={() => dispatch(switchMode())}> <img width={20} height={20} src={sun} alt="" /></div>
        {
            children
        }
      </BodyChild>
    </Body>
    </>
  )
}

const Body = styled.div`
max-width: 1400px;
min-height: 100vh;
background-color: ${colors.colorSecondary};
position: relative;
padding: 1.5rem 0;
`
const BodyChild = styled.div`
width:90%;
margin: 0 auto;
position: relative;

> .img {
    position: absolute;
    top: 0;
    right: 0;
}

> h1{
     padding-top:  1rem;
  margin:  30px auto;
  color: #E9C597;
  text-align: center;
  width: 400px;
  font-size: 2rem;
   @media (max-width: 800px) {
 width: 200px;
  font-size: 1rem;
  }
}

.addBtn{
  cursor: pointer;
  margin:  1rem auto;
  width: 150px;
  background-color: ${colors.colorPrimary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  box-shadow:  0px 7px 2px ${colors.colorTertiary};
color: white;
display: none;
   @media (max-width: 800px) {
  display: flex;
  }
}
`

export default PageLayout