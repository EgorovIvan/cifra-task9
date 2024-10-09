import * as React from 'react';
import { useState } from 'react';
import { useUserStore } from '../store/userStore';

const Extra: React.FC = () => {
    const { users } = useUserStore();
    const [isDragging, setDragging] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDrop = () => {
        setDragging(false);
    };

    return (
        <div
            className={`extra ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Extra;
