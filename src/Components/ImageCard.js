import React from 'react'

class ImageCard extends React.Component {

  localStarredHandler = () => {
    this.props.starredHandler(this.props.imageObj.id)
  }

  render() {
    return (
      <div class="container">
        <div class="row ">
          <div class="col s6 push-s3">
            <div class="card hoverable">
              <div class="card-image">
                <img src={this.props.imageObj.img_url} alt={this.props.imageObj.title} />
                <span class="card-title"></span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons" onClick={this.localStarredHandler}>⭐️</i>
                </a>
              </div>
              <div class="card-content">
                <p>{this.props.imageObj.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ImageCard