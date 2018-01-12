require('dotenv').config();

const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { expect, assert } = chai;

const imagePath = require('../config/app').imagePath;

describe('Images folder', function() {    
  it('should exist', function() {
    expect(fs.existsSync(imagePath)).to.be.true;
  });
});
