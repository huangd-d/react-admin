import React from 'react';
import Modal from './model';

function CheckModal({ isShowCheckModal, data, closeModal }) {
    return (
        <Modal isShowModal={isShowCheckModal} modalTitle='查看事件'>
            <p className='topic'>时间：{data.id}</p>
            <p className='topic'>内容：{data.content}</p>
            <p className='topic'>状态：{data.completed ? '已完成' : '未完成'}</p>
            <button onClick={closeModal}>确定</button>
        </Modal>
    );
}

export default CheckModal;
