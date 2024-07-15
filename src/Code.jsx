import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";    

export default function Code() {
  const codeString = `
    function greet() {
      console.log('Hello, world ..................................................................................................!');
    }
    greet();
  `;
  return (
    <SyntaxHighlighter language="javascript" style={darcula} showInlineLineNumbers = "true" wrapLongLines = "true">
      {codeString.trim()}
    </SyntaxHighlighter>
  );
}
