export class PlivoGenericResponse {
    constructor(params: any, idString: any);
    id: string;
}
export class PlivoResource {
    constructor(action: any, klass: any, idField: any, request: any);
    update(params: any, id: string): Promise<any>;
    delete(params: any): Promise<any>;
    executeAction(task: string, method: string, params: {}, action: any): Promise<any>;
    customexecuteAction(url: any, method?: string, params?: {}): Promise<any>;
    customexecuteGetNumberAction(url: any, method?: string, params?: {}): any;
    getMetaResponse(url: any, method?: string, params?: {}): Promise<any>;
}
export class PlivoResourceInterface {
    constructor(action: any, klass: any, idField: any, request: any);
    get(id: string, params?: {}): Promise<any>;
    list(params: any): Promise<any>;
    create(params: any): Promise<any>;
}
