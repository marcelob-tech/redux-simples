import React from 'react'
import Card from './Card';
import { connect } from 'react-redux';

const Media = (props) => {
    const { min, max} = props;
    console.log(min, max);
    return (
        <Card title="Média" green>
            <div className="Media">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default  connect(mapStateToProps)(Media)