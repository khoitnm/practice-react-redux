import HostsResolver from '../../common/rest/HostsResolver';
import IDocument from '../model/IDocument';
import axios from 'axios';

export default class DocumentClient {
    async createDocument(absPath: string, document: IDocument): Promise<void | IDocument> {
        const promise: Promise<void | IDocument> = axios
            .post<IDocument>(HostsResolver.practice_react_reduxServerApiPrefix + '/documents', document)
            .then(res => {
                return res.data;
            })
            .catch(error => console.log(error));
        return promise;
    }
}
