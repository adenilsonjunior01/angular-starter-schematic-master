import { Injectable } from '@angular/core';

import { CredentialsService } from '@app/authentication/services/credentials.service';
// @ts-ignore
import * as CryptoJS from 'crypto-js';

/**
 * @link: https://github.com/brix/crypto-js
 */
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private readonly credentials: CredentialsService) { }

  public encryptAES256(keys: string, valeu: any, storageName: string): void {
    let key = CryptoJS.enc.Utf8.parse(keys);
    let iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(valeu), key, {
        keySize: 16,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    this.credentials.setCredentials(encrypted.toString(), true);
  }

  public decryptAES256(keys: string, valueEncrypt: string): string {
    let key = CryptoJS.enc.Utf8.parse(keys);
    let iv = CryptoJS.enc.Utf8.parse(keys);

    const decrypted = CryptoJS.AES.decrypt(valueEncrypt, key, {
        keySize: 16,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
