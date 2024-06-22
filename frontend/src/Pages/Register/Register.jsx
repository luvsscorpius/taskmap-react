import React, { useContext, useState } from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../Context/Context'

export const Register = () => {
  const {addUser, Icon, icon, setIcon, eyeOff, eye, type, setType} = useContext(TaskContext)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  return (
    <H.component>
      <H.contents>
        <H.logoItems>
          <h2>Bem-vindo,</h2>
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
              <label htmlFor="nome">Digite seu nome</label>
              <input type="text" onChange={(e) => setNome(e.target.value)} placeholder='Nome'/>
            </H.inputs>

            <H.inputs>
              <label htmlFor="email">Digite seu e-mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </H.inputs>

            <H.inputs>
              <label htmlFor="">Digite sua senha</label>
              <input type={type} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
              <span>
                <Icon icon={icon} onClick={handleToggle}/>
              </span>
            </H.inputs>

            <H.forgot>
              <Link to='/'>Já tem conta?</Link>

              <div>
                <input type="checkbox" name="" id="check" /><p>Lembrar de mim</p>
              </div>
            </H.forgot>


            <H.login>
            <p>Criar sua conta com</p>

            <button onClick={(e) => addUser(e, nome, email, senha)}>Cadastrar</button>
          </H.login>
          </H.formInputs>
        </H.formItems>
      </H.contents>
    </H.component>
  )
}
