// radio.tsx component tests using vitest

import { act, render, screen } from "@testing-library/react";
import Radio from './Radio';


describe('Radio component', () => {
  beforeEach(() => {
    render(<Radio />);
  });

  it('should update the value with onChange', () => {
    const radio1: HTMLInputElement = screen.getByTestId('radio-1');
    const radio2: HTMLInputElement = screen.getByTestId('radio-2');
    const radio3: HTMLInputElement = screen.getByTestId('radio-3');

    act(() => radio1.click());
    expect(radio1.checked).toBe(true)
    expect(radio2.checked).toBe(false)
    expect(radio3.checked).toBe(false)

    act(() => radio2.click());

    expect(radio1.checked).toBe(false)
    expect(radio2.checked).toBe(true)
    expect(radio3.checked).toBe(false)

    act(() => radio3.click());

    expect(radio1.checked).toBe(false)
    expect(radio2.checked).toBe(false)
    expect(radio3.checked).toBe(true)
  });
});
