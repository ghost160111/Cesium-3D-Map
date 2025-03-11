import { PureComponent, ReactNode } from "react";

interface LoadingTextState {
  dots: string;
}

class LoadingText extends PureComponent<object, LoadingTextState> {
  intervalRef: NodeJS.Timeout;

  state: Readonly<LoadingTextState> = {
    dots: "...",
  };

  render(): ReactNode {
    return (
      <h2 className="main-title">
        Loading Maps {this.state.dots}
      </h2>
    );
  }

  componentDidMount(): void {
    this.setupInterval();
  }

  componentWillUnmount(): void {
    this.destroyInterval();
  }

  destroyInterval(): void {
    clearInterval(this.intervalRef);
  }

  setupInterval(): void {
    this.intervalRef = setInterval(this.animation, 1000);
  }

  animation = (): void => {
    this.setState(prevState => {
      const dots: string = prevState.dots;
      let newDots: string;

      switch (dots) {
        case "": newDots = "."; break;
        case ".": newDots = ".."; break;
        case "..": newDots = "..."; break;
        case "...": newDots = ""; break;
      }

      return {
        ...prevState,
        dots: newDots,
      };
    });
  }
}

export default LoadingText;
