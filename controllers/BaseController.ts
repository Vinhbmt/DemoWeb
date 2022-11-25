import {inject} from 'inversify';
import {controller} from 'inversify-express-utils';
import {Request, Response} from 'express';
import * as express from 'express';

@controller('/')
export default abstract class BaseController {
    notfound(res: Response) {
        res.status(404);
        res.send('Not found');
      }
    
      returnValue(handler: () => Promise<any>, response: Response): Promise<any> {
        return Promise.resolve()
          .then(handler)
          .then((result) => {
            if (result === undefined) {
              return this.notfound(response);
            }
            return result;
          });
      }
    
      params(request: express.Request): any {
        let parameters = {};
        if (request) {
          /********************************************\
                 * description: this method will collect all the parameters for the request with the priority below
                 *
                 * 1. url params - all methods
                 * 2. body - if method post/put
                 * 3. query params -  all methods
                 *
                \********************************************/
    
          //query params for all methods
          parameters = Object.assign(parameters, request.query || {});
    
          const httpMethod = request.method.toLowerCase();
          if (httpMethod === 'post' || httpMethod === 'put') {
            parameters = Object.assign(parameters, request.body || {});
          }
    
          // url params for all methods
          parameters = Object.assign(parameters, request.params || {});
        }
        return parameters;
      }
}