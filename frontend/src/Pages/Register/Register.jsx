import React, { useContext, useState } from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../Context/Context'

export const Register = () => {
  const {addUser} = useContext(TaskContext)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <H.component>
      <H.contents>
        <H.logoItems>
          <h2>Faça seu cadastro</h2>
          <p>Crie sua conta para continuar</p>

          <img src={logo} alt="" />
        </H.logoItems>

        <H.formItems>
          <H.formItemsButtons>
            <Link className='links' to='/' >Login</Link>
            <Link className='links' id='reg' to='/register'>Cadastro</Link>
          </H.formItemsButtons>

          <H.formInputs>
            <H.inputs>
              <label htmlFor="">Digite seu nome</label>
              <input type="text" onChange={(e) => setNome(e.target.value)}  />
            </H.inputs>

            <H.inputs>
              <label htmlFor="">Digite seu e-mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </H.inputs>

            <H.inputs>
              <label htmlFor="">Digite sua senha</label>
              <input type="password" onChange={(e) => setSenha(e.target.value)} />
            </H.inputs>

            <H.forgot>
              <Link to='/'>Já tem conta?</Link>

              <div>
                <input type="checkbox" name="" id="check" /><p>Lembrar de mim</p>
              </div>
            </H.forgot>


            <H.login>
            <p>Criar sua conta com</p>

            <button onClick={() => addUser(nome, email, senha)}>Cadastrar</button>
          </H.login>
          </H.formInputs>
        </H.formItems>
      </H.contents>
    </H.component>
  )
}
