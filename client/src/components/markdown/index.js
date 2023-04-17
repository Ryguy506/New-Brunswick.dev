
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Markdown = (props) => {
    return (
        <div className='content'>
            <ReactMarkdown children={props.markdown} renderers={{
    code: CodeBlock
}} />
        </div>
    )
}




const CodeBlock = ({ language, value }) => {
    return (
        <div className='content'>
        <SyntaxHighlighter language={language ?? null} style={docco}>
            {value ?? ''}
        </SyntaxHighlighter>
        </div>
    );
};

export default Markdown