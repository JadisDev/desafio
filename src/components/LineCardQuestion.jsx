import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardQuestion from './CardQuestion';

const LineCardQuestion = (props) => {

    const { types, show } = props

    return (
        <div>
            <Container>
                <Row>
                    {types && types.length && types.map((type, index) => (
                        <>
                            {
                                type.questions && type.questions.length > 0 &&
                                <Col sm="4" key={index}>
                                    <CardQuestion
                                        questions={type.questions}
                                        title={type.type}
                                        show={show}
                                    />
                                </Col>
                            }
                        </>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default LineCardQuestion