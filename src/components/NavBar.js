import React from 'react';

export default function NavBar(props) {
    const { state, setState } = props;

    const pages = [
        "Home",
        "Teams",
        "Contact Us",
        "Support",
    ]

    console.log('Header loading');

    return (
        <div className='NavBar'>
            <div className='NavBar_frame4'>
                <div className='NavBar_frame3'>
                    {pages.map((page) => {
                        return (
                            <p>{page}</p>
                        )
                    })}
                    <button>
                        <p>Login</p>
                    </button>
                </div>

            </div>
        </div>
    )
}