import React from 'react';
import Productos from './pages/Productos';
import Pedidos from './pages/Pedidos';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Panel de Administración</h1>
      <Productos />
      <Pedidos />
    </div>
  );
}
