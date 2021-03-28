import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from 'react-bootstrap/Button'

class Alternatives extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            alternatives: this.props.alternatives
        };

    }

    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <Form.Row>
                    <Form.Group as={Col} md="8">
                        <Label label="Informe a alternativa" />
                        <Input
                            id={"alternativeInput-" + i}
                            type="text"
                            placeholder="Informe a alternativa"
                            name={"alternativeInput-" + i}
                            value={el.alternative || ''}
                            onChange={this.handleChangeAlternative.bind(this, i)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Label label="Correta?" />
                        <Form.Check
                            aria-label="option 1"
                            name="true[]"
                            id={"check-" + i}
                            onClick={this.handleChangeCheckBox.bind(this, i)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Button
                            variant="danger"
                            onClick={this.removeClick.bind(this, i)}
                        >
                            Remover
                        </Button>
                    </Form.Group>
                </Form.Row>
            </div>
        )
    }

    handleChangeAlternative(i, event) {
        let values = [...this.state.values]
        const check = document.getElementById("check-" + i)
        const item = {
            'alternative': event.target.value,
            'check': check.checked
        }
        values[i] = item
        this.setState({ values })
        this.props.alternatives(values)
    }

    handleChangeCheckBox(i, event) {
        let values = [...this.state.values]
        const alternativeInput = document.getElementsByName("alternativeInput-" + i)
        const item = {
            'alternative': alternativeInput[0].value,
            'check': event.target.checked
        }
        values[i] = item
        this.setState({ values })
        this.props.alternatives(values)
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    render() {
        return (
            <div>
                <hr></hr>
                <Button style={{marginBottom: "25px"}}
                    variant="primary"
                    onClick={this.addClick.bind(this)}
                >
                    Adicionar alternativas +
                </Button>

                {this.createUI()}
                <hr></hr>
            </div>
        );
    }
}

export default Alternatives