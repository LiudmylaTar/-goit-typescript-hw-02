import { FadeLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = () => {
  return (
    <div className="sweet-loading">
      <FadeLoader
        cssOverride={override}
        height={20}
        color="#36d7b7"
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
