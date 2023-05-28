import { render, screen } from "@testing-library/react";
import { Button } from "@/components/Elements/Button";

describe("Button", () => {
  test("renders correctly", () => {
    render(<Button>Test</Button>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders correctly with props", () => {
    const fn = jest.fn();
    render(
      <Button disabled onClick={fn}>
        Test
      </Button>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeDisabled();
    expect(fn).not.toHaveBeenCalled();
  });

  test("disabled on loading", () => {
    render(<Button loading>Test</Button>);

    expect(screen.getByText("Test")).toBeDisabled();
  });

  test("renders correctly with icon", () => {
    render(<Button leftIcon={<span>Icon</span>}>Test</Button>);

    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  test("renders correctly with icon on right", () => {
    render(<Button rightIcon={<span>Icon</span>}>Test</Button>);

    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  test("renders correctly with icon on both sides", () => {
    render(
      <Button
        leftIcon={<span>leftIcon</span>}
        rightIcon={<span>rightIcon</span>}
      >
        Test
      </Button>
    );

    expect(screen.getByText("leftIcon")).toBeInTheDocument();
    expect(screen.getByText("rightIcon")).toBeInTheDocument();
  });

  test("icon not rendered on loading", () => {
    render(
      <Button
        leftIcon={<span>leftIcon</span>}
        loading
        rightIcon={<span>rightIcon</span>}
      >
        Test
      </Button>
    );

    expect(screen.queryByText("leftIcon")).not.toBeInTheDocument();
    expect(screen.queryByText("rightIcon")).not.toBeInTheDocument();
  });

  test("render loader on loading", () => {
    render(<Button loading>Test</Button>);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
