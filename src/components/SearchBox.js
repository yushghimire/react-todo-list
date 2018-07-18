import React from 'react';

let SearchBox = props => (
  <input
    className="search-box"
    type="text"
    value={props.searchKey}
    onChange={props.onChange}
  />
);

export default SearchBox;
