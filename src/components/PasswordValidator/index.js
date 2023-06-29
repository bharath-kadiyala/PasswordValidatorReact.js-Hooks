import {useState} from 'react'

import {
  BgContainer,
  FormContainer,
  Title,
  SubTitle,
  InputText,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, setPassword] = useState('')
  let valid
  const getInput = event => {
    setPassword(event.target.value)
  }

  if (inputValue.length < 8) {
    valid = true
  }

  return (
    <BgContainer>
      <FormContainer>
        <Title>Password Validator</Title>
        <SubTitle>Check how strong and secure is your password</SubTitle>
        <InputText type="password" onChange={getInput} value={inputValue} />
        {valid && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </FormContainer>
    </BgContainer>
  )
}

export default PasswordValidator
