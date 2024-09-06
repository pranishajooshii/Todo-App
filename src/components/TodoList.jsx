import { MdCheckBox, MdCheckBoxOutlineBlank, MdDeleteForever } from "react-icons/md";


export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <div className="checkbox-icon" onClick={() => onHandleCheckedTodo(data)}>
        {checked ? <MdCheckBox size={50} /> : <MdCheckBoxOutlineBlank size={50} />}
      </div>

      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};