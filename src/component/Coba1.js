import React from 'react';


export default function Coba1(props) {


    //high order component
    return (
        <div style={{ backgroundColor: 'red' }} >
            <div onClick={() => props.onClick(props.data)}>
                <h3 >{props.data.nama}</h3>
            </div>
            <button onClick={() => { props.onDelete(props.data.key) }}> Delete </button>
        </div>

    )

}