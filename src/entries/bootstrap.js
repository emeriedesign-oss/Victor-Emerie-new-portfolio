/* Publishes React on window before any page module runs.

   The page modules were written against the CDN UMD builds, so they expect
   bare `React` and `ReactDOM` globals and call ReactDOM.createRoot. Keeping
   that contract means the build can be introduced without rewriting every
   component to use imports. */
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

window.React = React;
window.ReactDOM = { createRoot, hydrateRoot };
