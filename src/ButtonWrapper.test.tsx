import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonWrapper } from './ButtonWrapper';

//Event handler testing

test('handler onCLick', () => {
    //jest.fn() is a method provided by Jest to create a mock function. A mock function is a function that records arguments, return values, and other information about the function calls for the purpose of testing. 
    const onClick = jest.fn();

    render(<ButtonWrapper onClick={onClick} title="add item" />);
    
    const buttonElemenet = screen.getByText('add item');
    fireEvent.click(buttonElemenet);
    //fireEvent.click(buttonElemenet) - simulate a click event on the buttonElemenet;

    expect(onClick).toHaveBeenCalledTimes(1);
});
