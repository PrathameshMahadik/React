/* Build a custom hook named useClipboard for copying text to the clipboard.
Implement a useClipboard hook that takes a text value as a parameter.
Use the document.execCommand API to copy the provided text to the clipboard.
Return a success status and methods to trigger the copying action.
Develop a component that uses the useClipboard hook to provide a copy button for text. */
import { useState } from "react";

const useClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  };
  return {
    copiedText,
    copyToClipboard,
  };
};
export default useClipboard;
