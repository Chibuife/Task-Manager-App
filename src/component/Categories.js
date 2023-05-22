import React from 'react'
import Button from './Button'
import styled from 'styled-components'
// import { colors } from '../colorVariables'

const categoriesBtn = ['Completed', 'Urgent', 'Important', 'Later', 'To study']
const Categories = ({
    colors,
    taskArray,
    setTaskArray
}) => {

    const sortCategoryFn = (item)=>{
        taskArray = JSON.parse(localStorage.getItem('task'))
        
        taskArray = taskArray.filter((it) => it.button === item)

        setTaskArray(taskArray)
}

    return (
        <CategoriesStyle colors={colors}>
            <div className='catdesign'><div className='line'></div> <span> Categories</span> <div className='line'></div></div>
            <div className="categoryBtns">
                {
                    categoriesBtn ? categoriesBtn.map((item, index) => {
                        return (
                             <div key={index} onClick={() => sortCategoryFn(item)}>
                                <Button width={'150px'} borderRaduis={'10px'} text={item} height={'25px'} />
                             </div>  
                        )
                    }) : null
                }
            </div>
            <div className='addCategory'> <Button text={'Add category'} width={'150px'} borderRaduis={'10px'} backgroundColor={colors.colorTertiary} /></div>
        </CategoriesStyle>
    )
}
const CategoriesStyle = styled.div`
padding: 2rem 0;
position: relative;
    border-radius: 5px;
background-color: ${({ colors }) => colors.colorPrimary};
text-align: center;
border-raduis: 10px;
box-shadow:  0px 7px 2px ${({ colors }) => colors.colorTertiary};
min-height: 300px;
display: flex;
justify-content: space-between;
flex-direction: column;
.categoryBtns{
        margin: 0.5rem auto;
> div{
    margin: 1rem auto;
    cursor: pointer;
    width:150px;
}
}

.catdesign{
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1.5rem;
color: white;
span{
  margin-left: 10px; 
  margin-right: 10px;}
}
.line{
    width: 30%;
    height: 1px;
    background-color: white;
}
.addCategory{
    margin-left: auto;
    margin-right:auto;
    cursor: pointer; 
}
 

  @media (max-width: 800px) {
display:none;
  }
`

export default Categories