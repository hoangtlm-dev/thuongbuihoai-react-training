import React from "react";
import { withRouter, NextRouter } from "next/router";

interface WithRouterProps {
  router: NextRouter;
}

interface MyComponentProps extends WithRouterProps {}

class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return <p>{this.props.router.pathname}</p>;
  }
}

export default withRouter(MyComponent);
