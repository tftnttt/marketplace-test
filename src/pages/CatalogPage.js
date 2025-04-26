import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'; // Используем компонент карточки товара
import { useLocation } from 'react-router-dom';

function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Пример продуктов
  const products = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Producto ${i + 1}`,
    price: Math.floor(Math.random() * 4000) + 200,
    image: 'https://via.placeholder.com/200',
  }));

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#white',
      paddingLeft: '60px',
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#FF6B81', marginBottom: '1rem' }}>
        Catálogo
      </h1>
      
      {/* Поиск */}
      <div style={{
        width: '100%',
        maxWidth: '850px',
        padding: '1rem',
        marginBottom: '2rem',
        backgroundColor: '#FFF',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      }}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.7rem 1.2rem',
            fontSize: '1rem',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '100%',
            backgroundColor: 'white',
            color: '#333333',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            outline: 'none',
          }}
        />
      </div>
      
      {/* Сетка карточек */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        width: '100%',
        maxWidth: '1200px',
        padding: '2rem',
        paddingTop: '3rem',
      }}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
