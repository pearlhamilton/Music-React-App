import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Like from '.';
import userEvent from '@testing-library/user-event';

describe('Like button', () => {
    beforeEach(() => {
        render(<Like />);
    })

    it('exists with content "like"', () => {
        const likeBtn = screen.queryByRole('button'); 
        expect(likeBtn.textContent).toContain("Like");      
    });
    it('when clicked changes content', () => {
        const likeBtn = screen.queryByRole('button');
        const prevBtnState = likeBtn.textContent;
        userEvent.click(likeBtn); 
        expect(prevBtnState).not.toBe(likeBtn.textContent);
    });
});
