import React, { useState } from 'react';

function ProductCard({ title, price, image, store, rating, description, badge }) {
  const [quantity, setQuantity] = useState(1); // Состояние для количества товара

  const handleAddToCart = () => {
    // Логика добавления товара в корзину с учётом количества
    console.log(`Товар "${title}" добавлен в корзину, количество: ${quantity}`);
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '1rem',
        width: '100%',
        maxWidth: '260px',
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
      }}
    >
      {/* Бейдж в углу */}
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#FF6B81',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
          }}
        >
          {badge}
        </div>
      )}

      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          borderRadius: '12px',
          marginBottom: '0.75rem',
          objectFit: 'cover',
        }}
      />

      <h3 style={{
        fontSize: '1.1rem',
        color: '#333333',
        marginBottom: '0.25rem',
      }}>{title}</h3>

      <p style={{
        fontSize: '0.95rem',
        color: '#666',
        marginBottom: '0.25rem',
      }}>
        Tienda: <strong>{store}</strong>
      </p>

      {/* Рейтинг */}
      <p style={{
        fontSize: '0.9rem',
        color: '#FFB800',
        marginBottom: '0.5rem',
      }}>
        {'⭐'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </p>

      {/* Краткое описание */}
      <p style={{
        fontSize: '0.85rem',
        color: '#444',
        marginBottom: '0.75rem',
        height: '2.5em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {description}
      </p>

      <p style={{
        fontSize: '1rem',
        fontWeight: '500',
        color: '#333333',
        marginBottom: '0.75rem',
      }}>{price} bs</p>

      {/* Выбор количества */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="quantity" style={{ fontSize: '0.9rem', color: '#333' }}>Cantidad:</label>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <button
            style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: '#FF6B81',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} // Уменьшаем количество
          >
            -
          </button>
          <span style={{ fontSize: '1rem', color: '#333' }}>{quantity}</span>
          <button
            style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: '#FF6B81',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
            onClick={() => setQuantity(quantity + 1)} // Увеличиваем количество
          >
            +
          </button>
        </div>
      </div>

      {/* Кнопки */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button style={{
          backgroundColor: '#FF6B81',
          border: 'none',
          padding: '0.35rem 0.75rem',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b51b59'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B81'}
        >
          Comprar
        </button>

        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #FF6B81',
            padding: '0.35rem 0.75rem',
            color: '#FF6B81',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#FF6B81';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FF6B81';
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
