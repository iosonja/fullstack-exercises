import React, { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })  
      .catch(error => {
        console.log('fail')
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add new contact</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <PersonsList persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  )
}

export default App
