import React, { useState, useCallback } from 'react';

// A child component that only rerenders if the callback changes
const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering Button - ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const Car = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Using useCallback to memoize the increment function
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // A non-memoized callback for comparison
  const incrementOtherCount = () => {
    setOtherCount(prevOtherCount => prevOtherCount + 1);
  };

  return (
    <div>
      <h1>useCallback Hook Example</h1>
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      <Button onClick={incrementCount}>Increment Count</Button>
      <Button onClick={incrementOtherCount}>Increment Other Count</Button>
    </div>
  );
};

export default Car;
