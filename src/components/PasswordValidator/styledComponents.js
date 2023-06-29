import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #434451;
  padding: 40px;

  max-width: 500px;
  border-radius: 10px;
`
export const Title = styled.h1`
  font-size: 45px;
  color: #ffffff;
  font-family: 'Roboto';
`
export const SubTitle = styled.p`
  font-size: 12px;
  color: #f8fafc;
  margin-bottom: 15px;
  margin-top: -4px;
  margin-bottom: 40px;
  font-family: 'Roboto';
`

export const InputText = styled.input`
  width: 250px;
  background-color: #ffffff;
  font-size: 18px;
  width: 85%;
  height: 35px;
  padding-left: 10px;
  font-family: 'Roboto';
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: #ef4444;
  font-family: 'Roboto';
`
