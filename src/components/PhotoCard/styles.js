import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

// Vamos a crear una función para hacer totalmente reutilizable esta animacion, para eso importamos css y creamos un metodo llamado fadeIn

export const Article = styled.article`
  min-height: 200px;
  width: 95%;
  margin: 20px auto;
  background-color: #f1f1f1;
  padding-bottom: 5px;
  border-radius: 20px;

`

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
`

export const UserName = styled.h4`
  margin: 0;
`

export const ImgWrapper = styled.div`
  
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin: 0 auto;
  border: 5px transparent #333;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
