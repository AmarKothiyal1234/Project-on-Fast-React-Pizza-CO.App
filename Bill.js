import React, { useEffect, useState } from "react";

function Bill() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    const fetchData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              { id: 1, name: "Item 1", price: 10 },
              { id: 2, name: "Item 2", price: 15 },
            ]),
          1000
        )
      );
      setItems(data);
    };

    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bill">
      <h1>Bill Details</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: ${totalAmount}</strong>
      </div>
      <button onClick={handlePrint} className="print-button">
        Print Bill
      </button>
    </div>
  );
}

export default Bill;
