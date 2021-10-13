import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const RestaurantsHeader = props => {
  const {sortByOptions, activeOptionValue, updateActiveOptionId} = props
  const onChangeSortby = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="restaurants-header">
      <div>
        <h1 className="restaurants-heading">Popular Restaurants</h1>
        <p className="choose-description">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionValue}
          onChange={onChangeSortby}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.value}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RestaurantsHeader
