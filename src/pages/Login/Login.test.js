import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import Router from '../../__test__/Router';

test('should have all the elements', () => {
    const {
        debug,
        getAllByText,
        getByTestId,
        getAllByPlaceholderText
    } = render(<Router><Login /></Router>);
    expect(getAllByText('Login')).toHaveLength = 1
    expect(getByTestId('login-btn').innerHTML).toEqual('log in');
    expect(getAllByPlaceholderText('Email Address').length).toEqual(1);
    expect(getAllByPlaceholderText('Password').length).toEqual(1);
    expect(getAllByText('Signup Here.').length).toEqual(1)
    // debug()
});

test('elements should disable login btn is clicked on', () => {
    const {
        debug,
        getAllByText,
        getByTestId,
        getAllByPlaceholderText
    } = render(<Router><Login /></Router>);
    fireEvent.change(getByTestId('email-input'), { target: { value: 'test@mail.com' } })
    fireEvent.change(getByTestId('password-input'), { target: { value: 'superman' } });
    fireEvent.click(getByTestId('login-btn'))
    expect(getByTestId('login-btn')).toBeDisabled();
    expect(getByTestId('email-input')).toBeDisabled();
    expect(getByTestId('password-input')).toBeDisabled();
})
