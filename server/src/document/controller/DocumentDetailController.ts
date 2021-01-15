import { StatusCodes } from 'http-status-codes';
import { logger } from '../../common/logging/Logger';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import IDocument from '../model/IDocument';
import { createDocument } from '../datafactory/DocumentFactory';

// Note: because of ControllersDeclaration.ts, please don't use `export default`, just use `export`
@Controller('documents')
export class DocumentDetailController {
    @Get(':documentId')
    private findById(req: Request, res: Response) {
        const documentId: string = req.params.documentId;
        logger.info(documentId);
        const document: IDocument = createDocument();
        return res.status(StatusCodes.OK).json(document);
    }
}
