import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Productos() {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    API.get('/productos').then(res => setLista(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-2">Productos</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.nombre}</td><td>{p.precio}</td><td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
