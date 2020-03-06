import React from 'react';

const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props} />
        </React.Suspense>
    };
};

export default WithSuspense;


