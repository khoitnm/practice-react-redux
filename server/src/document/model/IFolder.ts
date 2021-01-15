import IDFile from './IDFile';

export default interface IFolder extends IDFile {
    name: string;
    /**
     * We don't store `parentAbsolutePath` because if we do that, whenever a folder name is changed,
     * all of it children folders and documents must update their `parentAbsolutePath` accordingly.
     *
     * For the rootFolder, there will be no parent Folder anymore.
     */
    parentFolder?: IFolder;
    updatedDateTime: Date;
}
