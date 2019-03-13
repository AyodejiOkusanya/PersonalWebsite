import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    aboutMe: 'active',
    projects: null,
    blogs: null
  }

  handleClick = event => {
    this.setState = { aboutMe: null, projects: null, blogs: null }
        // ,
//     () => this.setState({
//       [event.target.id]: 'active'
//     }))
  }

  render () {
    return (
      <div style={{ padding: '20px', backgroundColor: 'black' }}>
        <div className='ui inverted secondary pointing menu'>
          <Link
            to={'/'}
            id='aboutMe'
            onClick={this.handleClick}
            className={`${this.state.aboutMe} item inverted`}
          >
            About Me{' '}
          </Link>
          <Link
            to={'/projects'}
            id='projects'
            onClick={this.handleClick}
            className={`${this.state.projects} item inverted`}
          >
            Projects
          </Link>
          <Link
            to={'/blogs'}
            id='blogs'
            onClick={this.handleClick}
            className={`${this.state.blogs} item inverted`}
          >
            Blogs
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
