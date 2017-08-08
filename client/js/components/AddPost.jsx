/* global React, ReactRouter, axios */
const hashHistory = ReactRouter.hashHistory

class AddPost extends React.Component {

  constructor (props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.addPost = this.addPost.bind(this)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleTitleChange (e) {
    this.setState({ title: e.target.value })
  }

  handleSubjectChange (e) {
    this.setState({ body: e.target.value })
  }

  addPost () {
    axios.post('/posts', {
      title: this.state.title,
      body: this.state.body
    })
    .then(function (response) {
      console.log('response from add post is ', response)
      hashHistory.push('/')
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className='col-md-5'>
        <div className='form-area'>
          <form role='form'>
            <br styles='clear:both' />
            <div className='form-group'>
              <input
                onChange={this.handleTitleChange}
                type='text' className='form-control' id='title' name='title' placeholder='Title' required
              />
            </div>

            <div className='form-group'>
              <textarea
                onChange={this.handleSubjectChange}
                className='form-control' type='textarea' id='subject' placeholder='Subject' maxlength='140' rows='7'
              ></textarea>
            </div>

            <button
              onClick={this.addPost}
              type='button' id='submit' name='submit' className='btn btn-primary pull-right'
            >Add Post</button>
          </form>
        </div>
      </div>
    )
  }
}
