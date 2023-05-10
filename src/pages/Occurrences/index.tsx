import { MagnifyingGlass } from 'phosphor-react'

import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { useOccurrencesQuery } from '../../graphql/generated/graphql'
import { OccurrencesContainer, OccurrencesTable } from './styles'

export function Occurrences() {
  const { data } = useOccurrencesQuery()
  return (
    <div>
      <Header />
      <OccurrencesContainer>
        <SearchForm />
        <OccurrencesTable>
          <tbody>
            {data?.occurrences.map((occurrence) => {
              return (
                <tr key={occurrence.id}>
                  <td>{occurrence.student}</td>
                  <td>{occurrence.school}</td>
                  <td>{occurrence.classroom}</td>
                  <td>{occurrence.registration}</td>
                  <td>{occurrence.date}</td>
                  <td>
                    <button type="submit">
                      <MagnifyingGlass size={32} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </OccurrencesTable>
      </OccurrencesContainer>
    </div>
  )
}
