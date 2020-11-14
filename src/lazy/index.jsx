import React, { Suspense } from 'react';

const OtherComponent1 = React.lazy(() => new Promise(resolve =>
  setTimeout(() => resolve(import('./OtherComponent') ),
    3000
  )
));

const MyComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent1 />
      </Suspense>
    </div>
  );
}

export default MyComponent;