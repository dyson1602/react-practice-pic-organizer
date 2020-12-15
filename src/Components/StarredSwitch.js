import React from 'react'

function StarredSwitch(props) {
  
  function localToggleHandler() {
    props.toggleHandler()
  }

  return (
    <>
      <div class="switch">
        <label>
          All
          <input type="checkbox" onClick={localToggleHandler}/>
          <span class="lever"></span>
          Starred
        </label>
      </div>
    </>
  )
}

export default StarredSwitch