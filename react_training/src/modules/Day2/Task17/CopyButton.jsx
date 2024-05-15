import React, { useState } from "react";
import useClipboard from "../../../components/useClipboard";

const CopyButton = () => {
  const { copiedText, copyToClipboard } = useClipboard();
  const [text, setText] = useState("");
  return (
    <div>
    <h1>useClipboard - Custom Hook</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copyToClipboard(text)}>
        {copiedText ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}
export default CopyButton;
