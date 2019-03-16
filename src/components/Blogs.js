import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Blogs extends React.Component {
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
      >
        <Grid.Row>
          <Grid.Column width={8}>
            <Image
              href='https://medium.com/@ayodejiokusanya/runtime-complexity-the-breakdown-8310a436ce33'
              target='_blank'
              src={require('../images/runtimecomplexblog.png')}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              href='https://medium.com/@ayodejiokusanya/web-analytics-using-web-data-to-achieve-your-business-goals-207282e34672'
              target='_blank'
              src={require('../images/webanalyticsblog.png')}
            />
          </Grid.Column>
        </Grid.Row>

        {/* <Grid.Row>
          <Grid.Column width={8}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    )
  }
}

export default Blogs
