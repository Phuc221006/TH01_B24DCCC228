import React from 'react';
import ReactDOM from 'react-dom/client';

function Bai1() {
  const [text, setText] = React.useState('');
  const maxLength = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const isOverLimit = text.length > maxLength;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2><strong>Bài 1: Bộ đếm ký tự</strong></h2>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={text}
        onChange={handleChange}
        style={{
          width: '300px',
          padding: '8px',
          border: isOverLimit ? '2px solid red' : '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <p style={{ marginTop: '10px', color: isOverLimit ? 'red' : 'black' }}>
        Số ký tự: {text.length}
      </p>
      {isOverLimit && (
        <p style={{ color: 'red' }}>
          ⚠️ Bạn đã vượt quá giới hạn 100 ký tự!
        </p>
      )}
    </div>
  );
}

// React 18: Dùng createRoot
const root = ReactDOM.createRoot(document.getElementById('bai1'));
root.render(<Bai1 />);
