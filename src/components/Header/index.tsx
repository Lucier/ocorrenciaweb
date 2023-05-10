import * as Dialog from '@radix-ui/react-dialog'

import { NewOccurrenceModal } from '../NewOccurrenceModal'
import { HeaderContainer, HeaderContent, NewOccurrenceButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewOccurrenceButton type="button">
              Nova ocorrência
            </NewOccurrenceButton>
          </Dialog.Trigger>
          <NewOccurrenceModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
