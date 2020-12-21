import React from 'react';

function Button(props) {

    return (
        <div className="card-button">
            <button  onClick={()=>props.handleAdd(props.id)} className="btn" disabled={props.bought && !props.bought}>
                {props.bought?<span className="text-btn">{"Удалить из корзины"}</span>: "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;