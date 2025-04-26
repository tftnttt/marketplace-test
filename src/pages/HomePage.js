import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import logo from '../assets/logo.png';

// Иконки категорий
import {
  Smartphone,
  Shirt,
  Home,
  ToyBrick,
  CookingPot,
  ShoppingBasket,
  Baby,
  BookOpen,
  HeartPulse,
  Music,
  Dumbbell,
  TreePine,
} from 'lucide-react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const products = Array.from({ length: 80 }, (_, i) => ({
    id: i + 1,
    title: `Producto ${i + 1}`,
    price: Math.floor(Math.random() * 4000) + 200,
    image: `https://cdn-icons-png.flaticon.com/512/891/891462.png`,
  }));

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleModal = () => setShowModal(prev => !prev);

  const categories = [
    { name: 'Electrónica', icon: Smartphone },
    { name: 'Ropa', icon: Shirt },
    { name: 'Hogar', icon: Home },
    { name: 'Juguetes', icon: ToyBrick },
    { name: 'Cocina', icon: CookingPot },
    { name: 'Supermercado', icon: ShoppingBasket },
    { name: 'Bebés', icon: Baby },
    { name: 'Libros', icon: BookOpen },
    { name: 'Salud', icon: HeartPulse },
    { name: 'Música', icon: Music },
    { name: 'Deporte', icon: Dumbbell },
    { name: 'Jardín', icon: TreePine },
  ];

  const handleCategoryHover = (index) => {
    setHoveredCategory(index);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '6rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
    }}>
      {/* Шапка */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        borderRadius: '0 0 16px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        gap: '1rem',
      }}>
        {/* Логотип */}
        <img
          src={logo}
          alt="Malina Market"
          style={{ height: '60px', objectFit: 'contain' }}
        />

        {/* Поиск */}
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flexGrow: 1,
            margin: '0 1rem',
            padding: '0.7rem 1.2rem',
            fontSize: '1rem',
            borderRadius: '10px',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            color: '#333333',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            outline: 'none',
          }}
        />

        {/* Кнопка Catálogo */}
        <button
          onClick={toggleModal}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#FF7F8E',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#b51b59'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#FF7F8E'}
        >
          ☰
        </button>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div
          onClick={toggleModal}
          style={{
            position: 'fixed',
            top: 93,
            left: 350,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            zIndex: 1100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '0px',
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '1250px',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Categorías</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
            }}>
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      backgroundColor: hoveredCategory === idx ? '#77D8C3' : '#98F5E1',
                      border: 'none',
                      borderRadius: '12px',
                      color: '#333',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={() => handleCategoryHover(idx)}
                    onMouseLeave={handleCategoryLeave}
                  >
                    <Icon style={{ marginRight: '0.5rem' }} />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            <button
              onClick={toggleModal}
              style={{
                marginTop: '2rem',
                alignSelf: 'flex-end',
                color: '#b51b59',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Карточки товаров */}
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
		      {/* Информация о правах */}
      <div style={{
  width: 'auto',
  padding: '1rem 0',
  marginTop: '3rem',
  marginLeft: '0rem',
  color: 'black',
  textAlign: 'center',
  fontSize: '0.9rem',
  fontWeight: '400',
}}>
   <span style={{ marginLeft: '29rem', display: 'inline-block', whiteSpace: 'nowrap' }}>
    © {new Date().getFullYear()} Malina Market. Todos los derechos reservados.
  </span>
      </div>
      </div>
    </div>
  );
  
}

export default HomePage;
