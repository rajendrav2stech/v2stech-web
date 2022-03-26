import React from 'react'

const GlobalHeading = ({ headingText, classname, splitWordsCount = 1 }) => {
    return (
        <div className={classname}>
            <strong>{headingText && headingText.split(" ").slice(0, splitWordsCount).join(' ')} </strong><span>{headingText && headingText.split(' ').slice(splitWordsCount).join(' ')}</span>
        </div>
    )
}

export default GlobalHeading;