import React from 'react';

function Modal({ isShowModal, modalTitle, children }) {
    return (
        <>
            {isShowModal ? (
                <div className='modal'>
                    <div className='inner'>
                        <div className='m-header'>{modalTitle}</div>
                        <div className="content-wrrapper">
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

export default Modal;
