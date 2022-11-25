export default function () {
    // @ts-ignore
    return function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, win2k, authorization',
      );
      next();
    };
  }
  