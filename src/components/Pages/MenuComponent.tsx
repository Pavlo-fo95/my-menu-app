import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

interface CurrencyItem {
  id: string;
  name: string;
  rate: number;
}

const MenuComponent: React.FC = () => {
  const [menuItems, setMenuItems] = useState<CurrencyItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();

      const currencyItems: CurrencyItem[] = Object.keys(data.rates).map((key) => ({
        id: key,
        name: key,
        rate: data.rates[key],
      }));

      setMenuItems(currencyItems);
    };

    fetchMenuItems();
  }, []);

  if (!menuItems || menuItems.length === 0) {
    return <div>Loading...</div>;
  }

  const offset = currentPage * itemsPerPage;
  const currentItems = menuItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <ul style={{ padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {currentItems.map(item => (
          <li key={item.id} style={{ listStyle: 'none', margin: '10px' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '200px', textAlign: 'center' }}>
              <div style={{ padding: '10px' }}>
                <h3 style={{ margin: '10px 0' }}>{item.name}</h3>
                <p style={{ margin: '10px 0', fontSize: '14px', color: '#555' }}>Rate: {item.rate}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(menuItems.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default MenuComponent;