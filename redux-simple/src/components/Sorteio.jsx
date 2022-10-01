import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// eslint-disable-next-line
const Sorteio = (props) => {
    const { min, max } = props
    const rand = Math.floor(Math.random() * (max + 1 - min)) + min
    console.log(props.min);
    console.log(props.max);
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ rand }</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps (state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)