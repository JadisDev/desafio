import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardQuestion from './CardQuestion';

const LineCardQuestion = (props) => {

    const { types } = props
    console.log(types)

    return (
        <div>
            <Container>
                <Row>
                    { types && types.length && types.map((type, index) => (
                        <Col sm="6">
                            <CardQuestion questions={type.questions} title={type.type} key={index}></CardQuestion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default LineCardQuestion