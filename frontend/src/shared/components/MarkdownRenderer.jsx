import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRenderer({ content }) {
    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown
                components={{

                    // Headings
                    h1: ({ children }) => (
                        <h1 className="text-4xl font-bold mt-6 mb-4 text-white">
                            {children}
                        </h1>
                    ),

                    h2: ({ children }) => (
                        <h2 className="text-3xl font-semibold mt-5 mb-3 text-white">
                            {children}
                        </h2>
                    ),

                    h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold mt-4 mb-2 text-white">
                            {children}
                        </h3>
                    ),

                    h4: ({ children }) => (
                        <h4 className="text-xl font-medium mt-4 mb-2 text-white">
                            {children}
                        </h4>
                    ),

                    // Paragraph
                    p: ({ children }) => (
                        <p className="leading-7 text-gray-200 mb-4">
                            {children}
                        </p>
                    ),

                    // Bold
                    strong: ({ children }) => (
                        <strong className="font-bold text-white">
                            {children}
                        </strong>
                    ),

                    // Italic
                    em: ({ children }) => (
                        <em className="italic text-gray-100">
                            {children}
                        </em>
                    ),

                    // Bullet List
                    ul: ({ children }) => (
                        <ul className="list-disc pl-6 space-y-2 my-4 text-gray-200">
                            {children}
                        </ul>
                    ),

                    // Number List
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-200">
                            {children}
                        </ol>
                    ),

                    // List Item
                    li: ({ children }) => (
                        <li className="marker:text-sky-400">
                            {children}
                        </li>
                    ),

                    // Blockquote
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-gray-300 my-4">
                            {children}
                        </blockquote>
                    ),

                    // Horizontal Line
                    hr: () => (
                        <hr className="border-slate-700 my-6" />
                    ),

                    // Links
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline"
                        >
                            {children}
                        </a>
                    ),

                    // Table
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                            <table className="table-auto border-collapse border border-slate-700 w-full">
                                {children}
                            </table>
                        </div>
                    ),

                    thead: ({ children }) => (
                        <thead className="bg-slate-800">
                            {children}
                        </thead>
                    ),

                    tbody: ({ children }) => (
                        <tbody>
                            {children}
                        </tbody>
                    ),

                    tr: ({ children }) => (
                        <tr className="border-b border-slate-700">
                            {children}
                        </tr>
                    ),

                    th: ({ children }) => (
                        <th className="border border-slate-700 px-4 py-2 text-left text-white">
                            {children}
                        </th>
                    ),

                    td: ({ children }) => (
                        <td className="border border-slate-700 px-4 py-2 text-gray-200">
                            {children}
                        </td>
                    ),

                    // Inline + Block Code
                    code({ inline, className, children, ...props }) {

                        const match = /language-(\w+)/.exec(className || "");

                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-xl mt-4 mb-4"
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code
                                className="bg-black/40 px-1.5 py-0.5 rounded text-sky-300 text-sm"
                                {...props}
                            >
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
