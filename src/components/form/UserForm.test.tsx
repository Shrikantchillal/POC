import { render, screen } from '@testing-library/react';
import UserForm from './UserForm';
import React from 'react';
import '@testing-library/jest-dom';

describe('It shows two inputs and one button', () => {

    test('che', () => {
        // render
        render(<UserForm />);

        screen.debug();

        //Manipulate
        const inputs = screen.getAllByRole('textbox');
        const buttons = screen.getByRole('button');

        // assertion
        expect(inputs).toHaveLength(2);
        // expect(buttons).tobeInTheDocument(1);
    });
});