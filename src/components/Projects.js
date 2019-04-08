import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Projects extends React.Component {
  render () {
    return (
      <Grid
        style={{
          padding: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
        columns={4}
        divided
      >
        <h1>Projects</h1>
        <Grid.Row>
          <Grid.Column>
            <Image
              href='https://youtu.be/kKOeFXIQKnE'
              target='_blank'
              src={require('../images/dex.png')}
            />
            <p style={{ paddingTop: '10px' }}>
              An app that allows the user to build a website and write code
              using only voice commeands.
            </p>
            <a href='https://youtu.be/kKOeFXIQKnE' target='_blank'>
              Watch the demo!
            </a>
          </Grid.Column>
          <Grid.Column>
            <Image
              href='http://movie-hub.surge.sh/'
              target='_blank'
              src={require('../images/movieapp.png')}
            />
            <p style={{ paddingTop: '10px' }}>
              A user friendly movie trailer site. Built with React and Ruby on
              Rails. Includes authentication and database relationships for
              adding frineds and seeing their liked movies.
            </p>
            <a href='http://movie-hub.surge.sh/' target='_blank'>
              Try it out!
            </a>
          </Grid.Column>
          <Grid.Column>
            <Image
              href='http://pongplus.surge.sh/'
              target='_blank'
              src={require('../images/ponggame.png')}
            />
            <p style={{ paddingTop: '10px' }}>
              A modern spin on the classic pong game. Build with Javascript,
              HTML Canvas and Ruby on Rails.
            </p>
            <a href='http://pongplus.surge.sh/' target='_blank'>
              Try it out!
            </a>
          </Grid.Column>
          <Grid.Column>
            <Image src={require('../images/foodblogapp.png')} />
            <p style={{ paddingTop: '10px' }}>
              A food blogging website. Functionality includes posting articles,
              commenting on posts and sending private messages. Built with Ruby
              on Rails.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Projects
