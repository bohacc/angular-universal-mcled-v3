var Constants = require('./constants');

export module Tools {
  export function getSingleResult(result) {
    var obj = {};
    if (result && result.result) {
      if (result.result.rows) {
        if (result.result.rows[0]) {
          obj = result.result.rows[0];
        } else {
          obj = {};
        }
      }
    }
    return obj;
  }

  export function getMultiResult (result) {
    var obj = [], i, l;
    if (result && result.result) {
      if (result.result.rows) {
        for (i = 0, l = result.result.rows.length; i < l; i += 1) {
          obj.push(result.result.rows[i]);
        }
      }
    }
    return obj;
  }

  export function validateEmail (value) {
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      result = value ? re.test(value) : true;
    return result;
  }

  export function getCookieId (req: any, name: string): string {
    return req.cookies.get(name);
  }

  export function getSessionId (req: any): string {
    return req.cookies.get(Constants.SESSIONID_CODE);
  }

  export function createCookie (res: any, name: string, val: string, options: any = {}) {
    res.cookies.set(name, val, options);
  }

  export function deleteCookie (res: any, name: string) {
    res.cookies.set(name, {expire: new Date()});
  }
}

