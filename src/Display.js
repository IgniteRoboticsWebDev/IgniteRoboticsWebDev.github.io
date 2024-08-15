import React from 'react';
import Header from './components/Header.js';

export default function Display(props) {
    const { state, setState } = props;

    return (
        <div className='Display'>
            <Header 
                state={state}
                setState={setState}
            />
        </div>
    )
}