import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar2 extends Component {
  state = { activeItem: 'about me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div style={{backgroundColor: 'black', padding:'20px'}}>
        <Menu pointing inverted secondary>
        
            <Link to={'/'}>
          <Menu.Item
            name='about me'
            active={activeItem === 'about me'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to={'/projects'}>
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Menu.Item
            name='blogs'
            active={activeItem === 'blogs'}
            onClick={this.handleItemClick}
          />
         
        </Menu>
      </div>
    )
  }
}
