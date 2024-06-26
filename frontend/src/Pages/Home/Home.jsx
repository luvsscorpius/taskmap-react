import React, { useContext } from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../Context/Context'

export const Home = () => {
  const {handleLogin, setEmail, setPassword, Icon, icon, setIcon, eyeOff, eye, type, setType} = useContext(TaskContext)

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
              <input type={type} placeholder='Password' name='senha' onChange={(e) => setPassword(e.target.value)}/>
              <span>
                <Icon icon={icon} onClick={handleToggle}/>
              </span>
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
    
    </H.component>
  )
}
