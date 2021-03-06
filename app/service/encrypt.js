'use strict';
var CryptoJS = require("crypto-js");
var config = require('../../config/config');

module.exports = {
	encriptar: function(password){
		var ciphertext = CryptoJS.AES.encrypt(password, config.passwordSecret);
		return ciphertext;
	},

	desencriptar: function(token){
		var bytes  = CryptoJS.AES.decrypt(token, config.passwordSecret);
		var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
		return decryptedData;
	}
}
