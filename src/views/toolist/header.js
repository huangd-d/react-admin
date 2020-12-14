import React from 'react'

function Header({openInput}) {
    return (
        <div className="header">
            <span>事件待办</span>
            <span className='header-icon' onClick={openInput}></span>
        </div>
    )
}

export default Header
