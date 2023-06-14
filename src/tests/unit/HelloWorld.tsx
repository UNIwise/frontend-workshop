import React from 'react';

interface HelloWorldProps {
  hasGreeting: boolean;
  hasName: boolean;
}

const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  const { hasGreeting, hasName } = props;

  return (
    <span data-testid="hello-world">
      {hasGreeting && !hasName && <h1>Hello</h1>}
      {hasGreeting && hasName && <h1>Hello, champion!</h1>}
      {!hasGreeting && hasName && <h1>Champion!</h1>}
    </span>
  );
}

export default HelloWorld;
