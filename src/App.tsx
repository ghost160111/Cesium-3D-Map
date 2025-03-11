import "./index.scss";
import Preloader from "components/Preloader";
import { lazy, PureComponent, ReactNode, Suspense } from "react";

const CesiumWrap = lazy(() => import("components/Cesium"));

class App extends PureComponent {
  render(): ReactNode {
    return (
      <div className="cesium-wrap">
        <Suspense fallback={<Preloader />}>
          <CesiumWrap />
        </Suspense>
      </div>
    );
  }
}

export default App;
