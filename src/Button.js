import React from 'react';

function Button(props) {

    return (
        <div className="card-button">
            <button  onClick={()=>props.handleAdd(props.id)} className="btn" disabled={props.bought}>
                {props.bought? "Добавлено в корзину": "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;