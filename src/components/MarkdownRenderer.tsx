import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
