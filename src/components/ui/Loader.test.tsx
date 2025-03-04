import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Testing the Loader Component", () => {
  test("Renders the loading spinner without fail", () => {
    render(<Loader />);
  });
});
