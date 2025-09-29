import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Bai4() {
  // Danh sách sản phẩm
  const products = [
    { id: 1, name: 'Sản phẩm A', price: 100 },
    { id: 2, name: 'Sản phẩm B', price: 200 },
    { id: 3, name: 'Sản phẩm C', price: 300 },
  ];

  // Giỏ hàng
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Xóa sản phẩm khỏi giỏ (nếu cần)
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Tính số lượng & tổng tiền
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2><strong>Bài 4: Giỏ hàng</strong></h2>
      <h3>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </h3>

      {/* Hiển thị danh sách sản phẩm */}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            margin: '10px 0',
            padding: '10px',
          }}
        >
          <h4>{product.name}</h4>
          <p>Giá: {product.price}đ</p>
          <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}

      {/* Danh sách giỏ hàng */}
      <h3 style={{ marginTop: '20px' }}>Chi tiết giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}đ
            <button
              onClick={() => removeFromCart(index)}
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
const root = ReactDOM.createRoot(document.getElementById('bai4'));
root.render(<Bai4 />);
