/* global React, axios */

class ShowPost extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    axios.get('/posts')
      .then(({ data: posts }) => this.setState({ posts }))
      .catch(console.error)
  }

  render () {
    return (
      <div className='list-group'>
        {
          this.state.posts.map(function (post, index) {
            return (
              <a href='#' key={index} className='list-group-item active'>
                <h4 className='list-group-item-heading'>{post.title}</h4>
                <p className='list-group-item-text'>{post.body}</p>
              </a>
            )
          })
        }
      </div>
    )
  }
}
