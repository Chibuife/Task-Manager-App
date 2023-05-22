import React from 'react'
import styled from 'styled-components'

const Button = ({ text, backgroundColor, weight, color, borderRaduis, border,
  width, height }) => {
  return (
    <ButtonStyle height={height} backgroundColor={backgroundColor} color={color} weight={weight} borderRaduis={borderRaduis} text={text} width={width} border={border}>{text}</ButtonStyle>
  )
}

const ButtonStyle = styled.div`
  width: ${({ width }) => width ? width : '100px'};
  height: ${({ height }) => height ? height : '30px'};
background-color:  
${({ text, backgroundColor }) =>
  backgroundColor ? backgroundColor :
    text == 'Completed' ? "#4CAF50" :
      text == 'Important' ? "#FFC107" :
        text == 'Later' ? "#9C27B0" :
          text == 'To study' ? "#25A7B8" :
            text == 'Urgent' ? "#FF5252" : ""};
  border-radius: ${({ borderRaduis }) => borderRaduis ? borderRaduis : ''};
display: flex;
justify-content: space-around;
align-items: center;
  font-weight: ${({ weight }) => weight ? weight : ''};
 color: ${({ color }) => color ? color : 'white'};
border:${(border) => border ? border: ''};
  `
export default Button