import { render , screen} from '@testing-library/react';
import {Button} from 'shared/ui/Button';

describe('Button', () => {
  test('Button', () => {
      // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();

    });
});
