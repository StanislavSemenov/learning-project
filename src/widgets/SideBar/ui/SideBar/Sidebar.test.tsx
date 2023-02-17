import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar';


describe('Button', () => {
  test('Button render', () => {
    render(<Sidebar />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  

});