import React from 'react';

function TodoItem({ data, openCheckModal, openEditModal, deleteItem }) {
    
    return (
        <div className='todo-item'>
            <div className='check-box'>
                <input type='checkbox' checked={data.completed} onChange={ () => {}} />
            </div>
            <span className='content' style={{ textDecoration: data.completed ? 'line-through' : 'none' }}>
                {data.content}
            </span>
            <div className='btn-group'>
                <button onClick={() => openCheckModal(data)}>查看</button>
                <button onClick={() => openEditModal(data)}>编辑</button>
                <button onClick={() => deleteItem(data)}>删除</button>
            </div>
        </div>
    );
}
export default TodoItem;
