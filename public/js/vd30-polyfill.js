if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      strat = 0;
    }
    return this.indexOf(search, strat) !== -1;
  };
}

"Javascript".includes("Java", 0);
