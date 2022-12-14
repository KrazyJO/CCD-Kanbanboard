
const { act } = require("react-dom/test-utils");

describe("The App", () => {
  it("can be imported without errors", () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    act(() => {
      require("../App.js");
    });
  });
});
