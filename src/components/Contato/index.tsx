import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas' // Ajuste no nome da ação
import ContatoClass from '../../models/Contato' // Ajuste para o modelo de Contato
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass // Usar o modelo de Contato

const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeContato, setNomeContato] = useState(nome)
  const [emailContato, setEmailContato] = useState(email)
  const [telefoneContato, setTelefoneContato] = useState(telefone)

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNomeContato(nome)
    setEmailContato(email)
    setTelefoneContato(telefone)
  }

  return (
    <S.Card>
      <label htmlFor={nomeContato}>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nomeContato}
        </S.Titulo>
      </label>
      <S.Descricao
        disabled={!estaEditando}
        value={nomeContato}
        onChange={(e) => setNomeContato(e.target.value)}
        placeholder="Nome"
      />
      <S.Descricao
        disabled={!estaEditando}
        value={emailContato}
        onChange={(e) => setEmailContato(e.target.value)}
        placeholder="Email"
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefoneContato}
        onChange={(e) => setTelefoneContato(e.target.value)}
        placeholder="Telefone"
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome: nomeContato,
                    email: emailContato,
                    telefone: telefoneContato
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
