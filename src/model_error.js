import { toastr } from 'react-redux-toastr'

function format(messages) {
    return {
        component: (
            <div>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index} > {message} </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export function modelError(error) {
    if (error.response) {
        console.log(error.response.data)
        const message = error.response.data.message
        if (error.response.data.cod === 422) {
            const messages = error.response.data.data
            if (Array.isArray(messages)) {
                toastr.warning('Atenção', message, format(messages))
            } else {
                toastr.warning('Atenção', messages)
            }
        } else {
            toastr.error('Ops', message)
        }
    } else {
        toastr.error('Error', 'Erro ao processar solicitação')
    }
}
