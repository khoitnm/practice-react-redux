import IVersionedDocument from './IVersionedDocument';

interface ICreateDocumentRequest {
    id: string;
    /**
     * This is the original authorId who created this document.
     * The updating author could be different for each version.<p/>
     *
     * This authorId refers to a userId.
     */
    createdAuthorId: string;
    createdDateTime: Date;

    currentVersion: IVersionedDocument;
    contentType: string; // contentType and extension sometimes are the same, sometimes are different.
    parentFolderId: string;
}
