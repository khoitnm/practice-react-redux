import { createFolderFromIdAndName, createRootFolder } from '../../datafactory/FolderFactory';
import IFolder from '../model/IFolder';

class FolderClient {
    async findRootFolder(): Promise<IFolder> {
        // TODO temp code
        return createRootFolder();

        // const url = `${HostsResolver.practice_react_reduxServerApiPrefix}/folders/root`;
        // const response = await axios.get<IFolder>(url);
        // return response.data;
    }

    async findFolderById(folderId: string): Promise<IFolder> {
        const parentFolder = createRootFolder();
        return createFolderFromIdAndName(folderId, 'Folder_' + folderId, parentFolder);
    }
}

export const folderClient = new FolderClient();
