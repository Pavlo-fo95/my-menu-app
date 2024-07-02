import React, { useState, useEffect } from 'react';
// @ts-ignore
import Paginator from 'react-pagimagic';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuComponent: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setMenuItems(data);
    };
  
    fetchMenuItems();
  }, []);

   
;

  const currentItems = menuItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul style={{ padding: 0 }}>
        {currentItems.map(item => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', listStyle: 'none', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '150px', height: '150px', marginRight: '20px', borderRadius: '8px' }} />
            <div>
              <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
              <p style={{ margin: '0 0 10px 0' }}>{item.description}</p>
              <p style={{ margin: '0', fontWeight: 'bold' }}>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <Paginator
        totalItems={menuItems.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MenuComponent;