import React from 'react'
import * as H from './Styles'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <H.component>
      <H.contents>
        <H.logoItems>
          <h1>Faça seu login</h1>
          <p>Entre na sua conta para continuar</p>

          <img src={logo} alt="" />
        </H.logoItems>

        <H.formItems>
          <H.formItemsButtons>
            <Link className='links'>Login</Link>
            <Link className='links'>Cadastro</Link>
          </H.formItemsButtons>

          <H.formInputs>
            <H.inputs>
              <label htmlFor="">Digite seu e-mail</label>
              <input type="email" />
            </H.inputs>

            <H.inputs>
              <label htmlFor="">Digite sua senha</label>
              <input type="password" />
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
