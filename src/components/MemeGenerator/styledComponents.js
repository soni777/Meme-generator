import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: 'Open Sans';
  @media (min-width: 768px) {
    min-height: 100vh;
    flex-direction: row;
    justify-content: center;
    padding: 50px;
  }
`

export const Title = styled.h1`
  color: #35469c;
  display: ${props => (props.show ? 'block' : 'none')};
  @media (min-width: 768px) {
    display: ${props => (props.show ? 'none' : 'block')};
  }
`

export const ImageDisplayContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 60%;
    height: 500px;
    order: 2;
  }
`
export const Paragraph = styled.p`
  color: #d7dfe9;
  font-size: ${props => props.fontSize}px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
    margin-right: 30px;
    order: 1;
  }
`

export const Label = styled.label`
  color: #7e858e;
  margin-bottom: 5px;
`

export const Input = styled.input`
  border: 1px solid #7e858e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 300px;
  }
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  border: none;
  outline: none;
`

export const Select = styled.select`
  border: 1px solid #7e858e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`
