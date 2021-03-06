import React from 'react'

const Filter = ({ filter, setFilter }) => {

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div id='searchField'>
      filter names: <input
        value={filter}
        onChange={handleFilter}
      />
    </div>
  )
}

export default Filter