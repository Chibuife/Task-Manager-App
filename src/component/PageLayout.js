import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import sun from '../image/sun.svg'
import moon from '../image/moon.svg'
import Modal from './Modal'

const PageLayout = ({ children, modal, setModal, setTaskArray, currentState, setCurrent, colors, setEdithTask, edithTask }) => {

  useEffect(() => localStorage.setItem('mode', currentState), [currentState])
  return (
    <>
      <Body colors={colors}>
        {modal && <Modal colors={colors} setTaskArray={setTaskArray} setModal={setModal} setEdithTask={setEdithTask} edithTask={edithTask}/>}
        <BodyChild colors={colors}>
        <h1>Personal <div> Task Manager</div></h1>
          <div className='addBtn' onClick={() => setModal(true)}>Add New Task</div>
          <div className='img' onClick={() => currentState ? setCurrent(false) : setCurrent(true)}> <img width={20} height={20} src={ currentState ? sun: moon} alt="" /></div>
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
background-color: ${({colors})=> colors.colorSecondary};
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
    cursor: pointer;
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
  background-color: ${({ colors }) => colors.colorPrimary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  box-shadow:  0px 7px 2px ${({ colors }) => colors.colorTertiary};
color: white;
display: none;
   @media (max-width: 800px) {
  display: flex;
  }
}
`

export default PageLayout