import React from 'react'

export default function FloatingBtn({
    text,
    onClick,
    disabled
}) {
    return (
        <button onClick={onClick} type="button" className="btn scroll-to-top rounded cl-white theme-bg mb-4">
            <span className='mb-3 h2'>{text}</span>
        </button>
    )
}
