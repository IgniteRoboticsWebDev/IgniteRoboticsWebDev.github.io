import React from 'react';
import Header from './components/Header.js';

export default function Display(props) {
    const { state, setState } = props;

    console.log('Display loading');

    return (
        <div className='Display'>
            <Header 
                state={state}
                setState={setState}
            />
        </div>
    )
}