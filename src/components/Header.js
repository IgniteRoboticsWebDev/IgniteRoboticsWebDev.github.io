import React from 'react';

export default function Header(props) {
    const { state, setState } = props;

    const pages = [
        "Home", 
        "Teams", 
        "Contact Us", 
        "Support",
    ]

    console.log('Header loading');
    
    return (
        <div className='Header'>
            {pages.map((page, index) => {
                if(page === state) {
                    return (
                        <p style={{fontWeight: "bold"}}>{page}</p>
                    )
                } else {
                    return (
                        <p>{page}</p>
                    )
                }
            })}
        </div>
    )
}