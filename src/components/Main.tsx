import * as React from 'react';

const Main: React.FC = () => {

    return (
        <main className="main">
            <div className="container">
                <h1 className={'main__title'}>Garmin Fenix 5s Plus</h1>
                <h2 className={'main__subtitle'}>Running GPS Units</h2>
                <div className={'main__img'}></div>
                <div className={'main__block'}>
                    <div className={'main__block-price'}>$469.95</div>
                    <div className={'main__block-gallery'}>

                    </div>
                </div>
                <div className={'main__info-list'}>
                    <div className={'main__info-item'}>
                        <p>Brand</p>Garmin
                    </div>
                    <div className={'main__info-item'}>
                        <p>Color</p>Silver W/White <br/>Band
                    </div>
                    <div className={'main__info-item'}>
                        <p>Display Size</p>1.2 Inches
                    </div>
                    <div className={'main__info-item'}>
                        <p>Item Dimensions</p>1.7 x 0.6 x 1.7
                    </div>
                </div>
                <button className={'main__btn'} >
                    extra
                </button>
            </div>
        </main>
    );
};

export default Main;
