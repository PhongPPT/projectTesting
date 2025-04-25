// src/pages/AddPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingItem = location.state?.item;

  const [formData, setFormData] = useState({
    title: '',
    // completed: false,
    type: '',
    // ຈຳນວນທີ່ນັ່ງ: '',
    // ປະຕູ: '',
    ແຮງມາ: '',
    // ລໍ້: '',
    // ຄວາມຈຸຖັງ: '',
    ລາຍລະອຽດ: '',
  });

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (editingItem) {
      await axios.put(`http://localhost:3001/tasks/${editingItem.id}`, formData);
    //   alert('Updated successfully!');
    } else {
      await axios.post('http://localhost:3001/tasks', formData);
    //   alert('Added successfully!');
    }
    navigate('/show');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl">{editingItem ? 'Edit Item' : 'Add Item'}</h1>
      <button> <a href="/show">Show data</a></button><br /><br />
      {Object.entries(formData).map(([key, val]) => (
        <div key={key} className="mb-2">
          <label className="block">{key}</label>
          {typeof val === 'boolean' ? (
            <input type="checkbox" name={key} checked={val} onChange={handleChange} />
          ) : (
            <input
              name={key}
              value={val}
              onChange={handleChange}
              className="border px-2 py-1 w-full"
            />
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        {editingItem ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default AddPage;
