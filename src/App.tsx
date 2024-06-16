import { Header, Aside, Table } from './components'

import './App.style.scss'

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Aside />
        <Table />
      </div>
    </>
  )
}
