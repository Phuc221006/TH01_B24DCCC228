import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Bai5() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Xử lý submit
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      setError('⚠️ Vui lòng điền đầy đủ thông tin!');
      setSubmittedData(null);
    } else {
      setError('');
      setSubmittedData(form);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2><strong>Bài 5: Form Đăng ký</strong></h2>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        value={form.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '8px', padding: '6px' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '8px', padding: '6px' }}
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '8px', padding: '6px' }}
      />
      <button onClick={handleSubmit}>Đăng ký</button>

      {/* Hiển thị lỗi */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {/* Hiển thị thông tin đã nhập */}
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Thông tin đã đăng ký:</h3>
          <p><strong>Tên:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mật khẩu:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

// React 18: Dùng createRoot
const root = ReactDOM.createRoot(document.getElementById('bai5'));
root.render(<Bai5 />);
