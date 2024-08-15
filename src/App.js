import React, { useState } from 'react';
import Display from './Display';

export default function App() {
    const [state, setState] = useState('Home');

    return (
        <Display
            state={state}
            setState={setState}
        />
    )
}