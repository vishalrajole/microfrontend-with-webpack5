import LocalButton from "./Button";
import React from "react";
const Button = React.lazy(() => import("app1/App1Button"));

const App = () => (
  <div>
    <h2>App 2</h2>
    <React.Suspense fallback="Loading Button">
      <Button />
    </React.Suspense>
    <LocalButton />
  </div>
);

export default App;
