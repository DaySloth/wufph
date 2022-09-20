import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
  Checkbox,
  Form
} from 'semantic-ui-react'

export default function Home() {
  return (
    <div className={styles.pageCenter}>
      <Head>
        <title>Wufph | Login</title>
        <meta name="description" content="Wufph messaging" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid centered columns={2} >
        <Grid.Column>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header icon>
                    <Icon name='user' />
                    Sign In
                  </Header>

                  <Form>
                    <Form.Field>
                      <label>Username</label>
                      <input />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input type={'password'} />
                    </Form.Field>
                    <Button type='submit' color='green'>Login</Button>
                  </Form>
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    <Icon name='user plus' />
                    Create Account
                  </Header>
                  <Button primary>Create</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>

      </Grid>


    </div>
  )
}
