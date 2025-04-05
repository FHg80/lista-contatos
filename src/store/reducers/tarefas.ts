import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      telefone: '(31)98453-2233',
      email: 'joseroberto@gmail.com',
      nome: 'Roberto'
    },
    {
      id: 2,
      telefone: '(31)98453-2233',
      email: 'joseroberto@gmail.com',
      nome: 'Roberto'
    },
    {
      id: 3,
      telefone: '(31)98453-2233',
      email: 'joseroberto@gmail.com',
      nome: 'Roberto'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id != action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id == action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() == action.payload.nome.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe um contato com esse nome.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
