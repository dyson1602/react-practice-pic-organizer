import React from 'react'

class PostForm extends React.Component {

  state = {
    title: "",
    img_url: "",
    starred: false
  }

  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div class="row">
        <form onSubmit={this.localSubmitHandler} class="col s12 push-s3">
          <div class="row">
            <div class="input-field col s6">
              <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.inputChangeHandler} />            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input type="text" name="img_url" placeholder="img url" value={this.state.img_url} onChange={this.inputChangeHandler} />
            </div>
          </div>
          <button class="btn waves-effect waves-light">Submit</button>
        </form>
      </div>




    )
  }

}

export default PostForm