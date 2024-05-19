import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AllJournals } from "./pages/journals/AllJournals"
import { CreateJournal } from "./pages/create-journal/CreateJournal"
import { Login } from "./pages/login/Login"

import { Layout } from "./components/Layout"
import { AuthCheck } from "./components/AuthCheck"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route element={<AuthCheck />}>
          <Route element={<Layout />}>
            <Route path="/" element={<AllJournals />}/>
            <Route path="/create" element={<CreateJournal />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App




// Solution to the error of Material UI Installation: https://stackoverflow.com/questions/72596908/could-not-resolve-dependency-error-peer-react16-8-0-17-0-0-from-materia

// Error Text for text field

// Clean code 
