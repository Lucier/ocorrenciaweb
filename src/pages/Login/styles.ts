import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  img {
    width: 300px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 340px;
    width: 100%;

    button {
      font-weight: 500;
    }
  }

  h1 {
    margin-bottom: 15px;
  }

  input {
    height: 58px;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    & + input {
      margin-top: 15px;
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    border: 0;
    font-size: 20px;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    transition: background-color 0.2;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 769px) {
      height: 50px;
    }
  }
`
