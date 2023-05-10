import { Route, Routes } from 'react-router-dom'

import { Occurrences } from './pages/Occurrences'

export function Router() {
  return (
    <Routes>
      <Route path="/occurrences" element={<Occurrences />} />
    </Routes>
  )
}
