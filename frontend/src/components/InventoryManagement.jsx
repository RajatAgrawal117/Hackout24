import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
    const [crops, setCrops] = useState([]);
    const [newCrop, setNewCrop] = useState({ name: '', quantity: '' });

    useEffect(() => {
        // Fetch existing crops from the backend
        axios.get('/api/crops/')
            .then(response => setCrops(response.data))
            .catch(error => console.error('Error fetching crops:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCrop({ ...newCrop, [name]: value });
    };

    const handleAddCrop = () => {
        // Add a new crop to the inventory
        axios.post('/api/crops/', newCrop)
            .then(response => setCrops([...crops, response.data]))
            .catch(error => console.error('Error adding crop:', error));
    };

    return (
        <div className="inventory-management">
            <h2>Crop Inventory Management</h2>
            <ul>
                {crops.map(crop => (
                    <li key={crop.id}>{crop.name} - {crop.quantity} kg</li>
                ))}
            </ul>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Crop Name" 
                    value={newCrop.name} 
                    onChange={handleInputChange} 
                />
                <input 
                    type="number" 
                    name="quantity" 
                    placeholder="Quantity (kg)" 
                    value={newCrop.quantity} 
                    onChange={handleInputChange} 
                />
                <button onClick={handleAddCrop}>Add Crop</button>
            </div>
        </div>
    );
};

export default InventoryManagement;
