import * as React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <p className={'header__title'}>Garmin</p>
                <div className={'header__img'}></div>
            </div>
        </header>
    );
};

export default Header;
