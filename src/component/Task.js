import React, { useState } from 'react'
import styled from 'styled-components'
import TaskBar from './TaskBar'
import Button from './Button'

const btn = ['Active', 'All', 'Completed']
function Task({ taskArray, setTaskArray, setModal, colors, setEdithTask }) {
    const [sortTask, setSortTask] = useState(1)



    const clearCompletedfn = () => {
        taskArray = taskArray.filter((item) => item.button !== 'Completed')
        console.log(taskArray)
        setTaskArray(taskArray)
        localStorage.setItem('task', JSON.stringify(taskArray))
    }




    const sortFn = (item, i) => {
        setSortTask(i)
        taskArray = JSON.parse(localStorage.getItem('task'))
        if (item !== 'All') {
            taskArray = taskArray.filter((i) =>
                i.category === item
            )
        }
        setTaskArray(taskArray)
    }





    return (
        <TaskStlye colors={colors}>
            <AddTaskNavBar colors={colors}><span>{taskArray.length} tasks </span> <div onClick={() => setModal(true)} className='taskBtn'><Button text={'Add new task'} width={'200px'} borderRaduis={'10px'} backgroundColor={'#38938A'} /> </div> <div onClick={clearCompletedfn}>  Clear Completed</div></AddTaskNavBar>
            <main className='taskStyleBody'>
                {
                    taskArray.map((item, i) => {
                        return (
                            <div className='taskbar' key={item.id} onClick={() => setEdithTask(item) || setModal(true)}>
                                <TaskBar colors={colors} description={item.description} button={item.button} />
                            </div>
                        )
                    })
                }

                <footer>
                    <div>
                        {
                            btn.map((item, i) => (
                                <div onClick={() => sortFn(item, i)} className={i === sortTask ? 'active' : ''}><Button text={item} color={'auto'} backgroundColor={'transparent'} /></div>
                            ))
                        }
                    </div>
                </footer>
            </main>
        </TaskStlye>
    )
}
const AddTaskNavBar = styled.div`
 @media (max-width: 800px) {
display:none;
  }
display: flex; 
justify-content: space-between;
margin-bottom: 1rem;
background: ${({ colors }) => colors.colorPrimary};
border-radius: 5px;
box-shadow:  0px 7px 2px ${({ colors }) => colors.colorTertiary};
padding: 0.5rem 1rem;
color: ${({ colors }) => colors.colorTertiary};
font-weight: 700;
>div{
    cursor: pointer;
}
`
const TaskStlye = styled.div`
  >main{
    background-color: white;
    overflow: hidden;
  border-radius: 5px;
  box-shadow:  0px 7px 2px ${({ colors }) => colors.colorTertiary};
    >div{
            margin-bottom: 0.07rem;
                cursor: pointer;

    }

}
footer{

    background-color: ${({ colors }) => colors.colorPrimary};
>div{
display:flex;
justify-content: space-around;
width:35%;
margin: 0 auto;
>div{
    font-weight: 700;
    cursor:pointer;
 color: ${({ colors }) => colors.colorTertiary};
  
}
  .active{
        color:white !important;
    }
}
}
`
export default Task