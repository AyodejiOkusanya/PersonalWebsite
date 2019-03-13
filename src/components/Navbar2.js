import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar2 extends Component {
  state = { activeItem: 'about me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div style={{ backgroundColor: 'black', padding: '20px' }}>
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

          <Link to={'/blogs'}>
            <Menu.Item
              name='blogs'
              active={activeItem === 'blogs'}
              onClick={this.handleItemClick}
            />
          </Link>

          <h1 style={{ position: 'absolute', top: '1px', left:'850px',color:'white'}}>Deji</h1>

          <Menu.Menu position='right'>
            <Link to={'/contactme'}>
              <Menu.Item
                name='contact me'
                active={activeItem === 'contact me'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
