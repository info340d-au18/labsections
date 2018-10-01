// example theme.js
import { dark as theme } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
    ...theme,
    prism: {
        style: okaidia
    },
    link: {
        textDecoration: 'none',
        color: 'gray'
    }
}