import React from "react";
import Button from "./Button";

const StyledButton = React.lazy(() => import("app2/App2Button"));

const App = () => (
  <div>
    <h2>App 1</h2>
    <Button />
    <React.Suspense fallback="Loading Button">
      <StyledButton />
    </React.Suspense>
  </div>
);

export default App;
