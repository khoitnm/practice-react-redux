export enum FileType {
    FOLDER,
    DOCUMENT
}

/**
 * A File could be a Folder or a Document.<br/>
 * The name 'DFile' is used to distinguished with default File type.<br/>
 * 'D' in 'DFile' just means 'Document', hence 'DFile' just means File in 'Document' system.
 */
export default interface IDFile {
    id: string;
    type: FileType;
    /**
     * This is the original authorId who created this document.
     * The updating author could be different for each version.<p/>
     *
     * This authorId refers to a userId.
     */
    createdAuthorId: string;
    createdDateTime: number;
}
