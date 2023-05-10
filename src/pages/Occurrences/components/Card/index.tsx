import { CardContainer, CardContent, CardHeader } from './styles'

interface CardData {
  student: string
  school: string
  description: string
}

export function Card({ student, school, description }: CardData) {
  return (
    <CardContainer>
      <CardHeader>
        <strong>{student}</strong>
        <strong>{school}</strong>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </CardContainer>
  )
}
