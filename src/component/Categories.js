import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { colors } from '../colorVariables'

const categoriesBtn = ['Completed', 'Urgent', 'Important', 'Later', 'To study']
const Categories = ({

}) => {
    return (
        <CategoriesStyle>
            <div className='catdesign'><div className='line'></div> <span> Categories</span> <div className='line'></div></div>
            <div className="categoryBtns">
                {
                    categoriesBtn ? categoriesBtn.map((item, index) => {
                        return (
                            <Button width={'150px'} borderRaduis={'10px'} text={item} height={'25px'} />
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
background-color: ${colors.colorPrimary};
text-align: center;
border-raduis: 10px;
box-shadow:  0px 7px 2px ${colors.colorTertiary};
min-height: 300px;

.categoryBtns{
> div{
    margin: 0.5rem auto;
    cursor: pointer;
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
    position: absolute;
    bottom: 5%;
    left: 5%;
    cursor: pointer; 
}
 

  @media (max-width: 800px) {
display:none;
  }
`

export default Categories