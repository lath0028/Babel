'use strict';

var asyncCall = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('Calling the function...');
                        _context.next = 3;
                        return resolveAsync();

                    case 3:
                        result = _context.sent;

                        console.log(result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function asyncCall() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*******************
ASYNC WITH AWAIT
********************/

function resolveAsync() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Resolved!');
        }, 3000);
    });
}

asyncCall();

/************************
METHOD SHORTHAND IN ES6
************************/

var obj = {

    prop1: 'John',
    prop2: 'The Demon',
    Concatanation: function Concatanation() {
        console.log(obj);
        console.log(this);
        console.log(prop1 + prop2);
    }
};
obj.Concatanation();

/************************
DESTRUCTURING
*************************/
function getUser() {
    return {
        name: 'Parshant lathiya',
        id: 1234567,
        location: 'toronto'
    };
}

var _getUser = getUser(),
    name = _getUser.name,
    id = _getUser.id,
    location = _getUser.location;

/***************************
FETCH
***************************/

var url = "https://jsonplaceholder.typicode.com/comments?postId=42";

fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    var str = JSON.stringify(data, null, '\t');
}).catch(function (err) {
    var nm = err.name;
    var msg = err.message;
    alert('CATCH:' + nm + msg);
});