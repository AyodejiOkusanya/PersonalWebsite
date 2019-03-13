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
              href='http://movie-hub.surge.sh/'
              src={require('../images/movieapp.png')}
            />
            <p style={{ paddingTop: '10px' }}>
              A user friendly movie trailer site. Built with React and Ruby on
              Rails. Includes authentication and database relationships for
              adding frineds and seeing their liked movies.
            </p>
            <a href='http://movie-hub.surge.sh/'>Try it out!</a>
          </Grid.Column>
          <Grid.Column>
            <Image
              href='http://pongplus.surge.sh/'
              src={require('../images/ponggame.png')}
            />
            <p style={{ paddingTop: '10px' }}>
              A modern spin on the classic pong game. Build with Javascript,
              HTML Canvas and Ruby on Rails.
            </p>
            <a href='http://pongplus.surge.sh/'>Try it out!</a>
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
