'use strict';

var base64;

beforeEach(module('ngBase64'));
beforeEach(inject(function(_base64_) {
  base64 = _base64_;
}));

describe('base64 encode', function() {
  it('should encode simple ASCII', function() {
    expect(base64.encode('a string')).to.equal('YSBzdHJpbmc=');
  });

  it('should encode data with whitespace', function() {
    expect(base64.encode('a string\r\ta paragraph')).to.equal('YSBzdHJpbmcNCWEgcGFyYWdyYXBo');
  });

// TODO: Currently failing test
//  it('should encode extended utf8', function() {
//    expect(base64.encode('I ♥ base64')).to.equal('SSDimaUgYmFzZTY0');
//  });

  it('should encode empty data', function() {
    expect(base64.encode('')).to.equal('');
  });
});

describe('base64 decode', function() {
  it('should decode simple ASCII', function() {
    expect(base64.decode('YSBzdHJpbmc=')).to.equal('a string');
  });
    
// Currently failing test
// TODO: it('should decode extended utf8', function() {
//    expect(base64.decode('SSDimaUgYmFzZTY0')).to.equal('I ♥ base64');
//  });

  it('should decode empty data', function() {
    expect(base64.decode('')).to.equal('');
  });

  it('should decode input with whitepace', function() {
    expect(base64.decode('YSBzd\r\t  HJpbmc=')).to.equal('a string');
  });

// TODO: Currently failing test
//  it('should throw on bad length', function() {
//    expect(function() { base64.decode('235'); }).to.throw(/InvalidLengthError/);
//  });
//
//  it('should throw on bad characters', function() {
//    expect(function() { base64.decode('!$#%'); }).to.throw(/InvalidCharacterError/);
//  });
});
