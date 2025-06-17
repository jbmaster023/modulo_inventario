import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    API.get('/pedidos').then(res => setPedidos(res.data));
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-2">Pedidos</h2>
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th>ID</th><th>Comprador</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.comprador}</td><td>{p.monto_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
