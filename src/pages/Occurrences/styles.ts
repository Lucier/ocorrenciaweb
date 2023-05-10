import styled from 'styled-components'

export const OccurrencesContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

// export const CardGrid = styled.div`
//   width: 100%;
//   max-width: 864px;
//   margin: 0 auto;

//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;

//   @media (max-width: 820px) {
//     grid-template-columns: 100%;
//   }

//   @media (max-width: 320px) {
//     grid-template-columns: 100%;
//   }
// `

export const OccurrencesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  button {
    margin-left: auto;
    margin-right: 1rem;
    background: transparent;
    border: none;

    width: 1.4rem;
    height: 1.4rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #808080;
  }
`
