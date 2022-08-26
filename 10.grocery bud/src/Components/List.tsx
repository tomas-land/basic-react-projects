import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'

interface IProps {
  listItems: {
    id: string;
    title: string;

  }[]
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}
const List = ({ listItems, removeItem, editItem }: IProps) => {
  return (
    <div>

      {listItems.map((item) => {
        return (
          <article className="listItem" key={item.id}>
            <div className="title">{item.title}</div>
            <button className="btn-edit">
              <FaEdit className="icon" onClick={() => editItem(item.id)} />
            </button>
            <button className="btn-delete" onClick={() => removeItem(item.id)}>
              <FaTrash className="icon" />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
