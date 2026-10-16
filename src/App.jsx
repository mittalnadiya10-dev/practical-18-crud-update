import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 101, title: 'React JS Handbook', price: 499, category: 'Books' },
    { id: 102, title: 'USB-C Fast Charger 65W', price: 1499, category: 'Electronics' },
    { id: 103, title: 'Bluetooth Wireless Earbuds', price: 2199, category: 'Audio' }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', price: '', category: '' });

  function startEdit(product) {
    setEditingId(product.id);
    setEditForm({ title: product.title, price: product.price, category: product.category });
  }

  function handleSave(id) {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, title: editForm.title, price: Number(editForm.price), category: editForm.category } : p
      )
    );
    setEditingId(null);
  }

  function handleCancel() {
    setEditingId(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h1 className="text-xl font-bold text-slate-800 mb-1">Product Catalog: Update Operation</h1>
        <p className="text-xs text-slate-500 mb-5">Select an existing product item to edit and update details in state.</p>

        <div className="space-y-2.5">
          {products.map((p) => (
            <div key={p.id} className="p-3.5 border border-slate-200 rounded bg-slate-50">
              {editingId === p.id ? (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="p-1.5 border border-slate-300 rounded text-xs bg-white"
                      placeholder="Title"
                    />
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                      className="p-1.5 border border-slate-300 rounded text-xs bg-white"
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      value={editForm.category}
                      onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                      className="p-1.5 border border-slate-300 rounded text-xs bg-white"
                      placeholder="Category"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSave(p.id)}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded font-medium transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-slate-300 hover:bg-slate-400 text-slate-700 text-xs px-3 py-1 rounded font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">{p.title}</h3>
                    <p className="text-xs text-slate-500">{p.category} • ₹{p.price}</p>
                  </div>
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded font-medium transition"
                  >
                    Edit Product
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
