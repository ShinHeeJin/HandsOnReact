import {
  render,
  screen,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import { Input } from "./index";

// describe로 처리를 모은다.
describe("Input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("should empty in input on initial render", () => {
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });

  // 문자를 입력했을 때, 입력한 내용이 표시되는지 테스트
  it("should show input text", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });
    expect(inputNode).toHaveValue(inputText);
  });

  // 버튼이 클릭되면 입력 텍스트가 클리어하는지 체크
  it("should reset when user clicks button", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole("button", {
      name: "Reset",
    }) as HTMLButtonElement;

    fireEvent.click(buttonNode);
    expect(inputNode).toHaveValue("");
  });
});
