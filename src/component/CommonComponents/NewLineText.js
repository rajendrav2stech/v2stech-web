import React from 'react'

function NewLineText({ text, paraStyle }) {
    const newText = text.split('\n').map((str, i) => <p key={i} style={paraStyle}>{str}</p>);

    return newText;
}

export default NewLineText
