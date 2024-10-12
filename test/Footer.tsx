import * as React from 'react';
import { useState } from 'react';
import Extra from './Extra';

const Footer: React.FC = () => {
    const [isUserListOpen, setUserListOpen] = useState(false);

    const toggleUserList = () => {
        setUserListOpen(!isUserListOpen);
    };

    return (
        <footer className="footer">
            <button onClick={toggleUserList}>Open User List</button>
            {isUserListOpen && <Extra />}
        </footer>
    );
};

export default Footer;
