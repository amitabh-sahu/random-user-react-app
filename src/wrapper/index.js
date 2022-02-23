import React from 'react';
import { Header } from '../components';

const PageWrap = (Component, classNames) => function HOC() {
    return (
        <div className={`app__container_${classNames}`}>
            <Header />
            <Component />
        </div>
    );
};

export default PageWrap;