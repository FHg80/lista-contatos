import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Tarefa from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const contatos = itens

  return (
    <MainContainer>
      <Titulo as="p">Lista de contatos</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              email={t.email}
              nome={t.nome}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
