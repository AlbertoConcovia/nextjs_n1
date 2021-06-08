import Layout from '../components/Layout';
import {Form, FormGroup, FormLabel,FormControl,Button} from 'react-bootstrap';


const App = () => {
  return (

  <Layout>
       
      <Form className="form-signin">

          <h1 className="h4 mb-4 font-weight-normal">Please sign in</h1>

              <FormGroup>
                    <FormLabel>User</FormLabel>
                    <FormControl type="text" className="mr-sm-2" name="usertext" />
               </FormGroup>

                <FormGroup>
                    <FormLabel>Password </FormLabel>
                    <FormControl type="password" className="mr-sm-2" name="password" />
                </FormGroup>

                <br/>
                    <Button block size="lg" style={{ background:"#00809c" , width:"20%"}} 
                     > Login  </Button>
                <br/>

        </Form>


    </Layout>

  )
}

export default App;