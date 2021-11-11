import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 8px;
  ${props => props.fixed && css`
    ${fadeIn()}
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    transition: 400ms ease-in-out;
    overflow: hidden;
  `}
  &::-webkit-scrollbar {
    display: block;
    border-radius: 20px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f1f1f1;
    border-radius: 20px;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
