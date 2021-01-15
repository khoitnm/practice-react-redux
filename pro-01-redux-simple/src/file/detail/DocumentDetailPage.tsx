import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouteParams = {
    documentId: string;
};

const DocumentDetailPage = ({ match }: RouteComponentProps<RouteParams>) => {
    return (
        <div>
            <h1>Document Detail </h1>
            <h2>{match.params.documentId}</h2>
        </div>
    );
};

export default DocumentDetailPage;
