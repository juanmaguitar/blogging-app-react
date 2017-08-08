/* global React, axios */

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.signUp = this.signUp.bind(this)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value })
  }

  handleEmailChange (e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange (e) {
    this.setState({ password: e.target.value })
  }

  signUp () {
    console.log(`Email address is ${this.state.email}  Password is ${this.state.password}`)
    axios.post('/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then(console.log)
    .catch(console.log)
  }

  render () {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>Please sign up</h2>

          <label for='inputName' className='sr-only'>Name</label>
          <input type='text' onChange={this.handleNameChange} id='inputName' className='form-control' placeholder='Name' required autofocus />

          <label for='inputEmail' className='sr-only'>Email address</label>
          <input type='email' onChange={this.handleEmailChange} id='inputEmail' className='form-control' placeholder='Email address' required autofocus />

          <label for='inputPassword' className='sr-only'>Password</label>
          <input type='password' onChange={this.handlePasswordChange} id='inputPassword' className='form-control' placeholder='Password' required />

          <button className='btn btn-lg btn-primary btn-block' onClick={this.signUp} type='button'>Sign up</button>
        </form>
        <div>
          <Link to='/'>SignIn</Link>
        </div>
      </div>
    )
  }
}
