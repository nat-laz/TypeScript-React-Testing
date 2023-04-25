import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

//Multiple element testing

test('renders a name', () => {
    const items = [{ name: 'test', href: "/test" }]

    render(<SideBar items={items} />);
    const anchorElemenets = screen.getAllByRole('navigation');
    expect(anchorElemenets[0]).toHaveTextContent(items[0].name);
    expect(anchorElemenets[0]).toHaveAttribute('href', items[0].href);
});
