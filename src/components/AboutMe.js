import React from 'react'
import { Image } from 'semantic-ui-react'
import { wrap } from 'module'

class AboutMe extends React.Component {
  render () {
    return (
      <div
        style={{
          padding: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Image src={require('../images/EF-4303.jpg')} size='medium' circular />
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'Georgia',
            fontSize: '20px',
            padding: '30px 400px 0px 400px'
          }}
        >
          {' '}
          <strong>Ayodeji Okusanya (Deji)</strong> <br />I am keen to obtain a
          challenging and meaningful position where I can further my career as a
          web engineer. I am interested in utilizing technologies such as
          Javascript, Ruby, React, Redux, Ruby on Rails, SQL, HTML, and CSS.
          During my time at the Flatiron School coding boot-camp I was able to
          build on my physics background and learn how to solve problems with
          code. I now have over 700 hours of coding experience and have loved
          every minute. I have enjoyed working on pair programming projects and
          building full stack web applications with Ruby on Rails. Some of the
          projects I have worked include an interactive pong game using vanilla
          javascript, a movie database site using react, and a voice command
          application that allows users to write code through speech.
        </p>
      </div>
    )
  }
}

export default AboutMe
