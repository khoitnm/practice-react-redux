import { createFolderFromAbsPath, createFolderFromIdAndName } from '../../datafactory/FolderFactory';
import { createDocument } from '../../datafactory/DocumentFactory';
import IDFile from '../model/IDFile';
import { v4 as uuid } from 'uuid';

export async function findFilesByParentFolderId(parentFolderId: string): Promise<IDFile[]> {
    // TODO temp code
    const parentFolder = createFolderFromAbsPath('/folder' + parentFolderId);
    parentFolder.id = parentFolderId;

    const childFolderId01 = uuid();
    const childFolderId02 = uuid();
    return [
        createFolderFromIdAndName(childFolderId01, 'folder_' + childFolderId01, parentFolder),
        createFolderFromIdAndName(childFolderId02, 'folder_' + childFolderId02, parentFolder),
        createDocument()
    ];

    // const url = `${HostsResolver.practice_react_reduxServerApiPrefix}/files?parentFolderId=${parentFolderId}`;
    // const response = await axios.get<IDFile[]>(url);
    // return response.data;
}
