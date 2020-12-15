import React from 'react'

function ImageCard(props) {

  function localStarredHandler() {
    props.starredHandler(props.imageObj.id)
  }

  return (
    <div class="container">
      <div class="row ">
        <div class="col s6 push-s3">
          <div class="card hoverable">
            <div class="card-image">
              <img src={props.imageObj.img_url} alt={props.imageObj.title} />
              <span class="card-title"></span>
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons" onClick={localStarredHandler}>⭐️</i>
              </a>
            </div>
            <div class="card-content">
              <p>{props.imageObj.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ImageCard