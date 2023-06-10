import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld component-testing', () => {
  it('should only render the greeting', () => {
    render(<HelloWorld hasGreeting={true} hasName={false} />);
    expect(screen.getByTestId('hello-world')).toHaveTextContent(/^Hello$/);
  });

  it('should render both greeting and name', () => {
    render(<HelloWorld hasGreeting={true} hasName={true} />);
    const spanNode = screen.getByTestId('hello-world');

    expect(spanNode.children).toHaveLength(1);
    expect(screen.getByTestId('hello-world')).not.toHaveTextContent(/^Hello$/);
    expect(spanNode).toHaveTextContent(/^Hello, champion!$/);
  });

  it('should only render the name', () => {
    render(<HelloWorld hasGreeting={false} hasName={true} />);

    expect(screen.getByTestId('hello-world')).toHaveTextContent(/^Champion!$/);
  });

  it('should not render anything', () => {
    render(<HelloWorld hasGreeting={false} hasName={false} />);

    expect(screen.getByTestId('hello-world')).toBeEmptyDOMElement();
  });
});
