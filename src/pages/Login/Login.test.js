import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import Router from '../../__test__/Router';

test('should render 2 Login Text', () => {
    const { debug, getAllByText } = render(<Router>
        <Login />
    </Router>);
    expect(getAllByText('Login')).toHaveLength = 1
    debug()
});
