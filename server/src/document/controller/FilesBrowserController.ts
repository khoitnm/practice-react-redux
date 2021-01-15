import { StatusCodes } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { createDocument } from '../datafactory/DocumentFactory';
import IDocument from '../model/IDocument';

// Note: because of ControllersDeclaration.ts, please don't use `export default`, just use `export`
@Controller('documents')
export class FilesBrowserController {
    @Get('')
    private findDocuments(req: Request, res: Response) {
        const result: IDocument[] = [createDocument(), createDocument()];
        return res.status(StatusCodes.OK).json(result);
    }
}
