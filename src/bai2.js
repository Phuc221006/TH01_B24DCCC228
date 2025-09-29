import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Bai2() {
  const lights = ['red', 'green', 'yellow']; // danh sách màu đèn
  const [current, setCurrent] = useState(0);

  // Hàm đổi đèn
  const changeLight = () => {
    setCurrent((prev) => (prev + 1) % lights.length);
  };



  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', textAlign: 'center' }}>
      <h2><strong>Bài 2: Đèn giao thông</strong></h2>
      <div
        style={{
          width: '80px',
          height: '220px',
          background: '#333',
          borderRadius: '20px',
          padding: '10px',
          margin: '20px auto',
        }}
      >
        {/* Đèn đỏ */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '10px auto',
            backgroundColor: current === 0 ? 'red' : 'gray',
          }}
        />
        {/* Đèn xanh */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '10px auto',
            backgroundColor: current === 1 ? 'green' : 'gray',
          }}
        />
        {/* Đèn vàng */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            margin: '10px auto',
            backgroundColor: current === 2 ? 'yellow' : 'gray',
          }}
        />
      </div>
      <button
        onClick={changeLight}
        style={{
          marginTop: '15px',
          padding: '6px 12px',
          borderRadius: '6px',
          border: '1px solid #444',
          cursor: 'pointer',
        }}
      >
        Chuyển đèn
      </button>
    </div>
  );
}

// React 18: Dùng createRoot
const root = ReactDOM.createRoot(document.getElementById('bai2'));
root.render(<Bai2 />);
