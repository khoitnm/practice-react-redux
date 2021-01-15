import IFolder from '../model/IFolder';
import { v4 as uuid } from 'uuid';
import { splitPathParts } from '../../common/io/PathUtils';
import { FileType } from '../model/IDFile';

export const createFolderFromName = (name: string, parent?: IFolder): IFolder => {
    return {
        id: uuid(),
        type: FileType.FOLDER,
        createdAuthorId: uuid().toString(),
        createdDateTime: new Date(),
        updatedDateTime: new Date(),
        name: name,
        parentFolder: parent,
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
