import styled from 'styled-components'
import { Link as LinkRoute} from '@reach/router'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Login = styled.div`
  display: flex;
  justify-content: center;
`

export const Link = styled(LinkRoute)`
  font-weight: 700;
  color: #333;
  padding-left: 5px;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`