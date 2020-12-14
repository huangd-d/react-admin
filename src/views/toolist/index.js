import React, { useState, useCallback, useEffect } from 'react';
import './index.less';

import Header from './header';
import AddInput from './addInput';
import TodoItem from './todoItem';
import CheckModal from './CheckModal';
import EditModal from './EditModal';

function Toolist() {
    const [isInputShow, setInputShow] = useState(true);
    const [todoList, setTdoList] = useState([]);
    const [isShowCheckModal, setShowCheckModal] = useState(false);
    const [isShowEditModal, setShowEditModal] = useState(false);
    const [checkedItem, setCheckedItem] = useState({});

    const addItem = useCallback((v) => {
        // useCallback 父组件addItem 以外的变化 不会引起子组件刷新
        const dataItem = {
            id: new Date().getTime(),
            content: v,
            completed: false,
        };
        setTdoList((todoList) => [...todoList, dataItem]);
        setInputShow(false);
    }, []);

    useEffect(() => {
        const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
        setTdoList(todoData);
        // return () => {

        // }
    }, []);

    useEffect(() => {
        // 有顺序的 上面 useEffect 先执行。
        localStorage.setItem('todoData', JSON.stringify(todoList));
    }, [todoList]);

    const openCheckModal = useCallback(
        (item) => {
            console.log(item);
            console.log(todoList);
            setCheckedItem(() => todoList.filter((el) => item.id === el.id)[0]);
            setShowCheckModal(true);
        },
        [todoList]
    );
    const openEditModal = useCallback(
        (item) => {
            console.log(item);
            console.log(todoList);
            setCheckedItem(() => todoList.filter((el) => item.id === el.id)[0]);
            setShowEditModal(true);
        },
        [todoList]
    );
    const submitNewData = useCallback(
        (newItem, item) => {
            setTdoList((todoList) => [...todoList.filter((el) => item.id !== el.id), newItem]);
            setShowEditModal(false);
        },
        [todoList]
    );

    const deleteItem = (v) => {
        setTdoList((todoList) => [...todoList.filter((el) => v.id !== el.id)]);
    };

    return (
        <div className='toolist-wrap'>
            <CheckModal isShowCheckModal={isShowCheckModal} data={checkedItem} closeModal={() => setShowCheckModal(false)}></CheckModal>
            <EditModal isShowEditModal={isShowEditModal} data={checkedItem} submitNewData={submitNewData}></EditModal>
            <Header openInput={() => setInputShow(!isInputShow)} />
            <AddInput addItem={addItem} isInputShow={isInputShow} />
            <div className='todo-list'>
                {todoList.map((el, index) => {
                    return (
                        <TodoItem
                            data={el}
                            key={el.id}
                            openCheckModal={openCheckModal}
                            openEditModal={openEditModal}
                            deleteItem={deleteItem}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Toolist;
