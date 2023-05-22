import { useSelector } from 'react-redux'
import store from './store'
import styled from 'styled-components'
// const mode = useSelector(state => state)
const currentState = store.getState()
console.log("currentState",currentState.mode)

// const colorPrimary = mode === 'light' ? "#54BAB9" : "#354259";
// const colorSecondary = mode === 'light' ? "#F7ECDE" : "#1C273C";
// const colorTertiary = mode === 'light' ? "#38938A" : "#44A0A0"; 
export const colors = {
    colorPrimary: currentState.mode.mode  ? "#54BAB9" : "#354259",
    colorSecondary: currentState.mode.mode  ? "#F7ECDE" : "#1C273C",
    colorTertiary: currentState.mode.mode  ? "#38938A" : "#44A0A0"
}