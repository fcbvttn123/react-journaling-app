import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AllJournals } from "./pages/journals/AllJournals"
import { CreateJournal } from "./pages/create-journal/CreateJournal"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllJournals />}/>
        <Route path="/create" element={<CreateJournal />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App




// Solution to the error of Material UI Installation: https://stackoverflow.com/questions/72596908/could-not-resolve-dependency-error-peer-react16-8-0-17-0-0-from-materia
