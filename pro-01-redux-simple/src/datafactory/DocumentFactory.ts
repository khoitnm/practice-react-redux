import { v4 as uuid } from 'uuid';
import { createFolderFromAbsPath } from './FolderFactory';
import IVersionedDocument, { Status } from '../file/model/IVersionedDocument';
import { FileType } from '../file/model/IDFile';
import IDocument from '../file/model/IDocument';

export const createVersionedDocument = (): IVersionedDocument => {
    const id = uuid();
    return {
        id,
        createdAuthorId: id,
        createdDateTime: new Date().getTime(),
        fullName: `doc_${id}.txt`,
        version: 0,
        status: Status.RELEASE
    };
};

export const createDocument = (): IDocument => {
    const id = uuid();
    const versionedDocument: IVersionedDocument = createVersionedDocument();
    return {
        id,
        type: FileType.DOCUMENT,
        createdAuthorId: id,
        createdDateTime: new Date().getTime(),
        contentType: 'text/plain',
        currentVersion: versionedDocument,
        versionsIds: [versionedDocument.id],
        parentFolder: createFolderFromAbsPath('/')
    };
};
