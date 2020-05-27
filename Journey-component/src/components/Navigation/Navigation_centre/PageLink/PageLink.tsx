import React from 'react';

interface PageLinkProps {
    text: string;
}

const PageLink: React.FC<PageLinkProps> = props => {
    return (
        <p>{props.text}</p>
    );
}

export default PageLink;