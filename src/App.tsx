import { memo } from 'react'
import './App.css'
import './styles/main.css'
import Table from './components/Table'

const App: React.FC = () => {
  return <Table />
}

export default memo(App)
