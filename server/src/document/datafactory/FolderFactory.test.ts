import { createFolderFromAbsPath } from './FolderFactory';
import IFolder from '../model/IFolder';

describe('createFolderFromAbsPath', () => {
    it.each(['', ' ', '/', '\\'])('should be able to create root folder "%s"', (absolutePath: string) => {
        const folder: IFolder = createFolderFromAbsPath(absolutePath);
        expect(folder.parentFolder).toBeUndefined();
    });
});
