import React, { useCallback } from 'react';
import { Button, Grid } from '@material-ui/core';
import IDFile, { FileType } from '../model/IDFile';
import IFolder from '../model/IFolder';
import IDocument from '../model/IDocument';
import { useHistory } from 'react-router-dom';

type FileBrowserItemProps = {
    file: IDFile;
};

const FileBrowserItem = (props: FileBrowserItemProps) => {
    const file = props.file;

    const history = useHistory();

    const onClickFile = useCallback(() => {
        let redirectUrl: string;
        if (file.type == FileType.FOLDER) {
            redirectUrl = `/file/browser/${file.id}`;
        } else {
            redirectUrl = `/document/detail/${file.id}`;
        }
        history.push(redirectUrl);
    }, [history]);

    if (file.type == FileType.FOLDER) {
        const folder = file as IFolder;
        return (
            <Grid item>
                <Button variant="outlined" type="button" onClick={onClickFile}>
                    {folder.name}
                </Button>
            </Grid>
        );
    } else {
        const document = file as IDocument;
        return (
            <Grid item>
                <Button variant="outlined" type="button" onClick={onClickFile}>
                    {document.currentVersion.fullName}
                </Button>
            </Grid>
        );
    }
};

export default FileBrowserItem;
