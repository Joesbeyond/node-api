var crypto = require('crypto');
console.log(crypto.getHashes());

/*Crypto库是随Nodejs内核一起打包发布的，主要提供了加密、解密、签名、验证等功能。Crypto利用OpenSSL库来实现它的加密技术，
它提供OpenSSL中的一系列哈希方法，包括hmac、cipher、decipher、签名和验证等方法的封装。
详细见http://blog.fens.me/nodejs-crypto/
*/
 /*所有支持哈希算法的加密算法
 [ 'DSA',
 'DSA-SHA',
 'DSA-SHA1',
 'DSA-SHA1-old',
 'RSA-MD4',
 'RSA-MD5',
 'RSA-MDC2',
 'RSA-RIPEMD160',
 'RSA-SHA',
 'RSA-SHA1',
 'RSA-SHA1-2',
 'RSA-SHA224',
 'RSA-SHA256',
 'RSA-SHA384',
 'RSA-SHA512',
 'dsaEncryption',
 'dsaWithSHA',
 'dsaWithSHA1',
 'dss1',
 'ecdsa-with-SHA1',
 'md4',
 'md4WithRSAEncryption',
 'md5',
 'md5WithRSAEncryption',
 'mdc2',
 'mdc2WithRSA',
 'ripemd',
 'ripemd160',
 'ripemd160WithRSA',
 'rmd160',
 'sha',
 'sha1',
 'sha1WithRSAEncryption',
 'sha224',
 'sha224WithRSAEncryption',
 'sha256',
 'sha256WithRSAEncryption',
 'sha384',
 'sha384WithRSAEncryption',
 'sha512',
 'sha512WithRSAEncryption',
 'shaWithRSAEncryption',
 'ssl2-md5',
 'ssl3-md5',
 'ssl3-sha1',
 'whirlpool' ]

*/
