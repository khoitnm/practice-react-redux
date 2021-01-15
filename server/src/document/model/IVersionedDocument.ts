/**
 * The VersionedDocument is independent from its parent Folder.<br/>
 *  - Let say the version 1 were created in Folder A.
 *  - And then the Document is moved to Folder B, and the version 2 is created there.
 *  - If we recover that Document to version 1, that recovered version 1 will be in Folder B.<br/>
 *
 * Hence we don't need to handle its parentAbsolutePath or parentFileId for versioned document.
 */
export default interface IVersionedDocument {
    id: string;
    fullName: string;
    createdAuthorId: string; // In a Document, the authorId of each version could be different.

    // There's no contentType because it should never be changed. The extension could be changed though.
    // Hence, the contentType data will come from the original Document.

    createdDateTime: Date; // The created date time here will be the Document.updateDateTime
    version: number;
    status: Status;
    textContent?: string;
    binaryContent?: Uint8Array;
}

export enum Status {
    DRAFT,
    RELEASE,
}
