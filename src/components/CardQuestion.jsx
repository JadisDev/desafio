import React from 'react'
import { Card } from 'react-bootstrap';

const CardQuestion = (props) => {

    const { questions, title, key } = props
    console.log(questions);

    return (
        <div>
            <Card key={{ key }}>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    {questions && questions.length && questions.map((question, index) => (
                        <Card.Text>
                            {question.description}
                        </Card.Text>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardQuestion