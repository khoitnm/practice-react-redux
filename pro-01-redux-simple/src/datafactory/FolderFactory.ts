import { v4 as uuid } from 'uuid';
import IFolder from '../file/model/IFolder';
import { FileType } from '../file/model/IDFile';
import { splitPathParts } from '../common/io/PathUtils';

export const createFolderFromIdAndName = (id: string, name: string, parent?: IFolder): IFolder => {
    return {
        id: id,
        type: FileType.FOLDER,
        createdAuthorId: uuid(),
        createdDateTime: new Date().getTime(),
        updatedDateTime: new Date().getTime(),
        name: name,
        parentFolder: parent
    };
};

export const createFolderFromName = (name: string, parent?: IFolder): IFolder => {
    return {
        id: uuid(),
        type: FileType.FOLDER,
        createdAuthorId: uuid(),
        createdDateTime: new Date().getTime(),
        updatedDateTime: new Date().getTime(),
        name: name,
        parentFolder: parent
    };
};

export const createRootFolder = (): IFolder => {
    return createFolderFromName('');
};

/**
 * @param absolutePath
 * @return a Folder which will have references to its parent Folders.
 */
export const createFolderFromAbsPath = (absolutePath: string): IFolder => {
    const parts: string[] = splitPathParts(absolutePath);
    let result: IFolder = createRootFolder();
    for (const part in parts) {
        result = createFolderFromName(part, result);
    }
    return result;
};
