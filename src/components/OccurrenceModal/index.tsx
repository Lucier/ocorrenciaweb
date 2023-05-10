import { FormEvent, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { useCreateOccurrenceMutation } from '../../graphql/generated/graphql'
import { CloseButton, Content, Overlay } from './styles'

export function OccurrenceModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova ocorrência</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        {/* <form onSubmit={handleOccurrence}> */}
        <form>
          <input
            type="text"
            placeholder="Aluno"
            // value={student}
            // onChange={(event) => setStudent(event.target.value)}
          />

          <input
            type="text"
            placeholder="Escola"
            // value={school}
            // onChange={(event) => setSchool(event.target.value)}
          />

          <input
            type="text"
            placeholder="Sala"
            // value={classroom}
            // onChange={(event) => setClassroom(event.target.value)}
          />

          <input
            type="text"
            placeholder="Sexo"
            // value={sex}
            // onChange={(event) => setSex(event.target.value)}
          />

          <input
            type="text"
            placeholder="Idade"
            // value={age}
            // onChange={(event) => setAge(event.target.value)}
          />

          <input
            type="text"
            placeholder="Matrícula"
            // value={registration}
            // onChange={(event) => setRegistration(event.target.value)}
          />

          <input
            type="date"
            size={100}
            placeholder="Data da ocorrência"
            // value={date}
            // onChange={(event) => setDate(event.target.value)}
          />

          <textarea
            placeholder="Descrição da ocorrência"
            rows={5}
            // value={description}
            // onChange={(event) => setDescription(event.target.value)}
          />

          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
