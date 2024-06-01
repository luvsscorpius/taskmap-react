import React from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
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
              <input type="email" placeholder='Email' name='email'/>
            </H.inputs>

            <H.inputs>
              <label htmlFor="senha">Digite sua senha</label>
              <input type="password" placeholder='Password' name='senha'/>
            </H.inputs>

            <H.forgot>
              <Link>Esqueceu a senha?</Link>

              <div>
                <input type="checkbox" name="" id="check" /><p>Lembrar de mim</p>
              </div>
            </H.forgot>


            <H.login>
            <p>Entre com outras contas</p>

            <button>Entrar</button>
          </H.login>
          </H.formInputs>
        </H.formItems>
      </H.contents>
    </H.component>
  )
}
