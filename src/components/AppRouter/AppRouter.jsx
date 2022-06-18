import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../../router';

const AppRouter = () => {
    const renderer = useRoutes(routes);

    return (
        <div>
            {renderer}
        </div>
    );
};

export default AppRouter;