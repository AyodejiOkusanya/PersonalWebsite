import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

class ContactMe extends React.Component {
  square = { width: 500, height: 500 }
  render () {
    return (
      <div
        style={{
          padding: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Segment circular style={this.square}>
          <Header as='h1'>
            EMAIL
            <div
              style={{
                // padding: '150px',
                paddingTop: '150px',
                paddingRight: '300px',
                paddingLeft: '70px'
              }}
            >
              <Header as='h2'>ayodeji.okusanya@gamil.com</Header>
            </div>
          </Header>
        </Segment>
        <Segment circular inverted style={this.square}>
          <Header as='h1' inverted>
            PHONE
            <div
              style={{
                // padding: '150px',
                paddingTop: '150px',
                paddingRight: '150px',
                paddingLeft: '140px'
              }}
            >
              <Header inverted as='h2'>07852274346</Header>
            </div>
          </Header>
        </Segment>
      </div>
    )
  }
}

export default ContactMe
