/* global React, axios */

const Link = window.ReactRouter.Link

class Signin extends React.Component { // eslint-disable-line

  constructor (props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.signIn = this.signIn.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange (e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange (e) {
    this.setState({ password: e.target.value })
  }

  signIn () {
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      if (response.data === 'success') {
        window.location.href = '/home'
      }
    })
    .catch(console.log)
  }

  render () {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'> Please sign in </h2>
          <label for='inputEmail' className='sr-only'> Email address</label>
          <input
            onChange={this.handleEmailChange}
            type='email' id='inputEmail' className='form-control' placeholder='Email address' required autofocus
          />
          <label for='inputPassword' className='sr-only'> Password</label>
          <input
            onChange={this.handlePasswordChange}
            type='password' id='inputPassword' className='form-control' placeholder='Password' required
          />
          <button
            onClick={this.signIn}
            className='btn btn-lg btn-primary btn-block' type='button'
          >Sign in</button>
        </form>
        <div>
          <Link to='/signup'>{'SignUp'}</Link>
        </div>
      </div>
    )
  }
}
