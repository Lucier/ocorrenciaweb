import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

export function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleAuthenticate(event: FormEvent) {
    event.preventDefault()

    return (
      <Container>
        <h1>Ocorrências</h1>
        <form onSubmit={handleAuthenticate}>
          <input
            name="email"
            placeholder="E-mail"
            type="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            name="password"
            placeholder="Senha"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </Container>
    )
  }
}
