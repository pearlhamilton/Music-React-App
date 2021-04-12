import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Form from '../Form'

describe('Controlled form', () => {
    beforeEach(() => {
        render(<Form />);
    });
    it('exists', () => {
      const form = screen.getByRole('form'); 
      expect(form).toBeTruthy();
    });
    // it('with artist name input', () => {

    // });
});
