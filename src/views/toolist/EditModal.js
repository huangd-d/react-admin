import React, { useRef } from 'react';

import Modal from './model';

function EditModal({ isShowEditModal, data, submitNewData }) {
    const areaRef = useRef();
    const checkRef = useRef();
    const formateNewData = () => {
        const val = areaRef.current.value.trim();
        const len = val.length;
        if (len === 0) {
            areaRef.current.value = data.content;
            return;
        }
        const newData = {
            id: new Date().getTime(),
            content: val,
            completed: checkRef.current.checked
        }
        submitNewData(newData, data);
    };
    return (
        <Modal isShowModal={isShowEditModal} modalTitle='编辑事件'>
            <p className='topic'>时间：{data.id}</p>
            <p className='topic'>
                <textarea ref={areaRef} defaultValue={data.content}></textarea>
            </p>
            <p className='topic'>
                状态： <input type='checkbox' defaultChecked={data.completed} ref={checkRef} />
            </p>
            <button onClick={formateNewData}>确定</button>
        </Modal>
    );
}

export default EditModal;
