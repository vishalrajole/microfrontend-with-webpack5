import React from "react";

const StyledButton = React.lazy(() => import("app2/Button"));

const App = () => (
  <div>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <StyledButton />
    </React.Suspense>
  </div>
);

export default App;
