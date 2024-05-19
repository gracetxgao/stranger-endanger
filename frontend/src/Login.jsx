import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const attemptLogin = async (name) => {
        try {
            console.log(name)
            const { data } = await axios.post('http://localhost:5000/login', {name: name})
            return data
        }   catch (error) {
            console.log(error)
        }
    }

    const formSubmit = (event) => {
        // event.preventDefault();
        var input = document.getElementById('exampleForm.ControlInput1').value
        attemptLogin(input).then((response) => {
            console.log(response)})
    }

    return (
        <Container fluid className="d-flex vh-100" style={{ width: '100vw' }}>
            <Row className="m-auto w-100">
                <Col xs={10} md={8} lg={6} className="d-flex flex-column align-items-center mx-auto" style={{ maxWidth: '500px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Log in</h1>
                    <Form className="w-100">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password123" />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Link to="/explore">
                                <Button className="mt-3" onClick={formSubmit}>Start Exploring</Button>
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;