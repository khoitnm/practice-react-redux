import IDFile from './IDFile';
import IVersionedDocument from './IVersionedDocument';
import IFolder from './IFolder';

export default interface IDocument extends IDFile {
    currentVersion: IVersionedDocument;

    // The model should not store all VersionedDocument because loading all of versions at the same time will waste of bandwidth.
    versionsIds: string[]; // In time asc order (the first item/version is the oldest version)

    contentType: string; // contentType and extension sometimes are the same, sometimes are different.

    // The following fields must be always calculated properly together.
    /**
     * We don't store `parentAbsolutePath` because if we do that, whenever a folder name is changed,
     * all of it children folders and documents must update their `parentAbsolutePath` accordingly.<p/>
     *
     * A Document must always have a parent folder (which could be a Root Folder).
     */
    parentFolder: IFolder;
}
