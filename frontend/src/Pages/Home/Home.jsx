import React, { useState } from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    // Fazer a chamada da api do backend 
    try {
      const response = await axios.post("http://localhost:2000/login", JSON.stringify({email, password}), 
      {
        headers: {'Content-Type': 'application/json'}
      }
      )

      setUser(response.data)

      // Caso der algum erro
    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor')
      } else if (error.response.status == 401) {
        setError('Usuário ou senha invalidos')
      }
    }
  }

  return (
    <H.component>
      <H.contents>
        <H.logoItems>
          <h2>Bem-vindo,</h2>
          <p>Entre na sua conta para continuar</p>

          <img src={logo} alt="" />
        </H.logoItems>

        <H.formItems>
          <H.formItemsButtons>
            <Link className='links' id='log'>Login</Link>
            <Link className='links' to='/register'>Cadastro</Link>
          </H.formItemsButtons>

          <H.formInputs>
            <H.inputs>
              <label htmlFor="email">Digite seu e-mail</label>
              <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)}/>
            </H.inputs>

            <H.inputs>
              <label htmlFor="senha">Digite sua senha</label>
              <input type="password" placeholder='Password' name='senha' onChange={(e) => setPassword(e.target.value)}/>
            </H.inputs>

            <H.forgot>
              <Link>Esqueceu a senha?</Link>

              <div>
                <input type="checkbox" name="" id="check" /><p>Lembrar de mim</p>
              </div>
            </H.forgot>


            <H.login>
            <p>Entre com outras contas</p>

            <button onClick={handleLogin}>Entrar</button>
          </H.login>
          </H.formInputs>
        </H.formItems>
      </H.contents>

      <p>{error}</p>
    </H.component>
  )
}
