import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from '../index';

afterEach(() => {
  cleanup();
});

test('should render Button', () => {
  render(<Button dataTestId="button"> Giriş Yap </Button>);
  expect(screen.getByTestId('button')).toBeInTheDocument();
});

test('should render Button correctly', () => {
  render(
    <Button block disabled dataTestId="button">
      Giriş Yap
    </Button>,
  );
  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Giriş Yap');
});

test('should onClick works', () => {
  const fn = jest.fn();
  render(
    <Button dataTestId="button" onClick={fn}>
      Giriş Yap
    </Button>,
  );
  const button = screen.getByTestId('button');
  expect(screen.getByTestId('button')).toBeInTheDocument();
  fireEvent.click(button);
  expect(fn).toHaveBeenCalledTimes(1);
});
