import { render , screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button';

describe('Button', () => {
  test('Button render', () => {
      // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  
  test('Button with theme', () => {
      // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
    });
});
