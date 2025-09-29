import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Bai3() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Thêm công việc
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Xóa công việc
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2><strong>Bài 3: Danh sách công việc</strong></h2>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={handleChange}
        style={{ padding: '6px', marginRight: '8px' }}
      />
      <button onClick={addTask}>Thêm</button>

      <ul style={{ marginTop: '15px' }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: '6px' }}>
            {t}{' '}
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: '10px',
                color: 'white',
                backgroundColor: 'red',
                border: 'none',
                padding: '4px 8px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// React 18: Dùng createRoot
const root = ReactDOM.createRoot(document.getElementById('bai3'));
root.render(<Bai3 />);
