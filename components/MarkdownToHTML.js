import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

const renderers = {
  // eslint-disable-next-line react/display-name
  code: ({ language, value }) => (
    // eslint-disable-next-line react/no-children-prop
    <SyntaxHighlighter style={theme} language={language} children={value} />
  ),
};

export default function MarkdownToHTML({ children }) {
  return <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>;
}
