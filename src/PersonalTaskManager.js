import React, { useEffect, useState } from 'react'
import Categories from './component/Categories'
import Task from './component/Task'
import styled from "styled-components"
import PageLayout from './component/PageLayout'
import { useSelector } from "react-redux";

const task = [{ description: 'Memorize the fifty states and their capitals', button: 'Completed', category: 'Completed' }, { description: 'Memorize the fifty states and their capitals', button: 'Urgent', category: 'Active' }, { description: 'Memorize the fifty states and their capitals', button: 'Important', category: 'Active' }, { description: 'Memorize the fifty states and their capitals', button: 'Later', category: 'Active' }, { description: 'Memorize the fifty states and their capitals', button: 'To study', category: 'Active' },]
const PersonalTaskManager = () => {
  const [modal, setModal] = useState(true)

  const tasks = useSelector(state => state.tasks);
  const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem('task')));

  useEffect(() => {
    if (!taskArray) {
      localStorage.setItem('task', JSON.stringify(task));
    }
    setTaskArray(JSON.parse(localStorage.getItem('task')));
  }, [])

  console.log("tasks", tasks)



  return !taskArray ? <div>Loading</div> : (
    <PageLayout modal={modal} setModal={setModal} setTaskArray={setTaskArray}>
      <TaskLayout>
        <Categories />
        <Task taskArray={taskArray} setTaskArray={setTaskArray} setModal={setModal} />
      </TaskLayout>
    </PageLayout>
  )

}
const TaskLayout = styled.div`
display: grid;
gap 1rem;
grid-template-columns: 1fr 4fr;
// min-height: 400px;
   @media (max-width: 800px) {
grid-template-columns: 1fr;
  }
`
export default PersonalTaskManager