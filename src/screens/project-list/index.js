import { SearchPanel } from './SearchPanel'
import { List } from './List'
import { useEffect, useState } from 'react'
export const ProjectListScreen = () => {
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  useEffect(() => {
    fetch('').then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  return (
    <div>
      <SearchPanel param={param} setParam={setParam}></SearchPanel>
      <List list={list}></List>
    </div>
  )
}
