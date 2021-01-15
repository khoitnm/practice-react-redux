import * as bodyParser from 'body-parser';
import * as controllers from './ControllersDeclaration';
import { Server } from '@overnightjs/core';
import { logger } from './common/logging/Logger';

class NormalRouterServer extends Server {
    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
    }

    private setupControllers(): void {
        const controllerInstances = [];
        for (const name of Object.keys(controllers)) {
            const controller = (controllers as any)[name];
            if (typeof controller === 'function') {
                controllerInstances.push(new controller());
            }
        }
        super.addControllers(controllerInstances);
    }

    public start(port?: number | string): void {
        this.app.listen(port, () => {
            const sampleDocumentId = process.hrtime.bigint();
            logger.info(`
                REST API server started on:
                http://localhost:${port}
                http://localhost:${port}/documents
                http://localhost:${port}/documents/${sampleDocumentId}
                `);
        });
    }
}

export default NormalRouterServer;
