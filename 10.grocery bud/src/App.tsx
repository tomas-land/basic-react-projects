import React, { useEffect } from 'react';
import { useState, FC } from 'react';
import './Styles/App.css';
import Data from './Data';
import List from './Components/List';
import Alert, { Message } from './Components/Alert';
import { isTemplateSpan } from 'typescript';

interface IAlert {
  show: boolean;
  msg: string;
  type: string;
  // getName: (name:string) => string;
}
interface Item {
  id: string;
  title: string;
}

// type IList = {
//     id: string
//     title: string

// }[]

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list')!);
  } else {
    return []
  }
}

const App = () => {
  const [name, setName] = useState<string>('')
  const [list, setList] = useState<Item[]>(getLocalStorage())
  const [alert, setAlert] = useState<IAlert>({ show: false, msg: '', type: '' })
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editID, setEditID] = useState<string | null>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!name) {
      setAlert({ show: true, type: 'danger', msg: 'Enter the grocery' })
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item;
      }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      setAlert({ show: true, type: 'success', msg: 'Item edited' })
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
      setAlert({ show: true, type: 'success', msg: Message.success })
    }
  }

  const clearItems = () => {
    setList([])
    setAlert({ ...alert, show: false })
  }
  const removeItem = (id: string) => {
    const filteredItems = list.filter((item) => item.id !== id)
    setList(filteredItems);
    setAlert({ show: true, type: 'danger', msg: 'Item deleted' })
  }
  const editItem = (id: string) => {
    const specItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(specItem!.id);
    setName(specItem!.title)
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return (
    <div className='App'>
      <section className="section-center">
        <form action="" className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} />}
          <h3>grocery bud</h3>
          <div className="form-group">
            <input type="text" placeholder='eg. bread' value={name} onChange={e => setName(e.target.value)} />
            <button className='btn' type='submit'>{isEditing ? 'edit' : 'add'}</button>
          </div>
        </form>
        {
          list.length > 0 && (
            <div className="grocery-list">
              <List listItems={list} removeItem={removeItem} editItem={editItem} />
              <button className='btn-clear' onClick={clearItems}>Clear Items</button>
            </div>
          )}
      </section>
    </div>
  );
}

export default App;


