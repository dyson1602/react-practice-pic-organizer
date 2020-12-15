import React from 'react'
import ImageCard from '../Components/ImageCard'
import PostForm from '../Components/PostForm'
import SearchForm from '../Components/SearchForm'
import StarredSwitch from '../Components/StarredSwitch'

class ImageContainer extends React.Component {

  state = {
    images: [],
    searchTerm: "",
    starredOnly: false
  }

  //EVENT HANDLERS

  filteredImages = () => {
    if (this.state.starredOnly === false) {

      let filteredArray = this.state.images.filter(image => image.title.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()))

      return filteredArray.map(image => <ImageCard key={image.id}
        imageObj={image} starredHandler={this.starredHandler} />)
    } else {

      let starredArray = this.state.images.filter(image => image.title.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()) && image.starred === true)

      return starredArray.map(image => <ImageCard key={image.id}
        imageObj={image} starredHandler={this.starredHandler} />)
    }
  }

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  toggleHandler = () => {
    this.setState(prevState => ({ starredOnly: !prevState.starredOnly }))
  }

  submitHandler = (imgObj) => {
    this.setState({ images: [...this.state.images, imgObj] })
    this.postImageFetch(imgObj)
  }

  starredHandler = (imgId) => {
    const optimisticImgArray = [...this.state.images]
    let starImg = optimisticImgArray.find(image => image.id === imgId)
    starImg.starred = !starImg.starred
    this.setState({ images: optimisticImgArray })
    this.starredSwitchFetch(imgId, starImg)
  }

  //API REQUESTS

  async componentDidMount() {
    const apiResponse = await fetch('http://localhost:4000/images')
    const imageArray = await apiResponse.json()
    this.setState({ images: imageArray })
  }

  postImageFetch = async (imgObj) => {
    await fetch('http://localhost:4000/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imgObj)
    })
  }

  starredSwitchFetch = async (imgId, starImg) => {
    await fetch(`http://localhost:4000/${imgId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(starImg)
    })
  }


  //RENDER CONTAINER

  render() {
    return (
      <div className={"container alignObjects: center"}>
        <h4>Post a New Image</h4>
        <PostForm submitHandler={this.submitHandler} />
        <SearchForm searchTerm={this.state.searchTerm} searchHandler={this.searchHandler} />
        <StarredSwitch toggleHandler={this.toggleHandler} />
        {this.filteredImages().reverse()}
      </div>
    )
  }
}

export default ImageContainer