import CesiumWrap from "components/Cesium";
import { PureComponent, ReactNode } from "react";

class App extends PureComponent {
  render(): ReactNode {
    return (
      <div className="cesium-wrap">
        <CesiumWrap />
      </div>
    );
  }
}

export default App;
