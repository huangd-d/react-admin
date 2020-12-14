import React, { useRef } from 'react';

function AddInput({ isInputShow, addItem }) {
    const InputRef = useRef();
    const submitValue = () => {
        const inputValue = InputRef.current.value.trim();
        if (inputValue.length === 0) {
            return;
        }
        addItem(inputValue);
        InputRef.current.value = '';
    };
    return (
        <>
            {isInputShow ? (
                <div className='input-wrap'>
                    <input ref={InputRef} placeholder='请输入待办事件' />
                    <button onClick={submitValue}>增加</button>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

export default AddInput;
