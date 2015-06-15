var querystring = require('querystring');
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// returns
'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':'));
// returns
'foo:bar;baz:qux'


var qs = querystring.parse('foo=bar&baz=qux&baz=quux&corge')

console.log(qs);
// returns
//{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }