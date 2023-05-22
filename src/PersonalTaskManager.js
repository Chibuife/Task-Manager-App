import React, { useEffect, useState } from 'react'
import Categories from './component/Categories'
import Task from './component/Task'
import styled from "styled-components"
import PageLayout from './component/PageLayout'

const task = [{ id: 1, description: 'Memorize the fifty states and their capitals', button: 'Completed', category: 'Completed' }, { id: 2, description: 'Memorize the fifty states and their capitals', button: 'Urgent', category: 'Active' }, { id: 3, description: 'Memorize the fifty states and their capitals', button: 'Important', category: 'Active' }, { id: 4, description: 'Memorize the fifty states and their capitals', button: 'Later', category: 'Active' }, { id: 5, description: 'Memorize the fifty states and their capitals', button: 'To study', category: 'Active' },]
const PersonalTaskManager = () => {
  const [modal, setModal] = useState(false)
  const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem('task')));
  const [currentState, setCurrent] = useState(localStorage.getItem('mode'))
  const [edithTask, setEdithTask] = useState()



  const colors = {
    colorPrimary: currentState ? "#54BAB9" : "#354259",
    colorSecondary: currentState ? "#F7ECDE" : "#1C273C",
    colorTertiary: currentState ? "#38938A" : "#44A0A0"
}


  useEffect(() => {
    if (!taskArray) {
      localStorage.setItem('task', JSON.stringify(task));
    }
    setTaskArray(JSON.parse(localStorage.getItem('task')));
  }, [])




  return !taskArray ? <div>Loading</div> : (
    <PageLayout modal={modal} setModal={setModal} setTaskArray={setTaskArray} setCurrent={setCurrent} currentState={currentState} colors={colors} edithTask={edithTask} setEdithTask={setEdithTask}> 
      <TaskLayout>
        <Categories taskArray={taskArray} setTaskArray={setTaskArray} colors={colors}/>
        <Task taskArray={taskArray} setTaskArray={setTaskArray} setModal={setModal} colors={colors} setEdithTask={setEdithTask}  />
      </TaskLayout>
    </PageLayout>
  )

}
const TaskLayout = styled.div`
display: grid;
gap 1rem;
grid-template-columns: 1fr 4fr;
   @media (max-width: 800px) {
grid-template-columns: 1fr;
  }
`
export default PersonalTaskManager