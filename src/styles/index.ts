import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
