import IVersionedDocument, { Status } from '../model/IVersionedDocument';
import { v4 as uuid } from 'uuid';
import IDocument from '../model/IDocument';
import { createFolderFromAbsPath } from './FolderFactory';
import { FileType } from '../model/IDFile';

export const createVersionedDocument = (): IVersionedDocument => {
    return {
        id: uuid(),
        createdAuthorId: uuid().toString(),
        createdDateTime: new Date(),
        fullName: 'RandomName' + uuid() + '.txt',
        version: 0,
        status: Status.RELEASE,
    };
};

export const createDocument = (): IDocument => {
    const versionedDocument: IVersionedDocument = createVersionedDocument();
    return {
        id: uuid(),
        type: FileType.DOCUMENT,
        createdAuthorId: uuid().toString(),
        createdDateTime: new Date(),
        contentType: 'text/plain',
        currentVersion: versionedDocument,
        versionsIds: [versionedDocument.id],
        parentFolder: createFolderFromAbsPath('/'),
    };
};
