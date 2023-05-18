import { type ReactNode } from "react";

// This file is for fixig async components bug

declare global {
  namespace React.JSX {
    type ElementType =
      | keyof React.JSX.IntrinsicElements
      | ((props) => Promise<ReactNode> | ReactNode);
  }
}
