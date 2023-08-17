import fs from 'fs'
import crypto from 'crypto'
import path, { dirname } from 'path';
var t1Assertion = "j0YTWjJ8vCXHjxGgz2Me";


const generateCombinations = () => {
  const nums = 4
  const chars = "0123456789"
  const combinations = []

  const targetDir = '/Users/jmisteli/Documents/Videography/ITIO/bancolext/data/opciones.csv'
  console.log(targetDir)
  fs.writeFileSync(targetDir, 'Hello')
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 10; l++) {
          const combination = `${i}${j}${k}${l}`;
          console.log(combination)
          fs.appendFileSync(targetDir, combination + ',' + processPassword(combination) + '\n');
        }
      }
    }
  }
}
const processPassword = (password) => {
  const clavePublica = 'A6CA1BB4BD803E5704A071E8F7370FD68F2A42CAB574A765693F0F54796CB8AD2CF1B624005119FE651227F7992FF6A6D1979C9B72EA0EAD789F1CBADAB9851779CB8F5F82F40BC71C5C303A10298ED6DC5657E3401AE5720F06836F098366441AC30AB35F13FAB8B6CE81955A1181FCA0AD4EA471CC09C51EAE8EDA42E8C615F933483449CBC67883F407430CB856E4EEC1919BFDD38850CCF5837EC67D8CF802EC30836099592FCDB6CEF4D4AB8EC7F95229B6B262DC6F9A62BFD082CCF98D8FC73FADFA2CCBDDBD17126206E0EC41FE85ECDB9B7631A7EDEF193E4971ADA3E4AB3FFE05F5146907255AD29D0AFB91160C95E225514E1CD07E35BA157A44D1'
  const datosCifrados = crypto.publicEncrypt(
    {
      key: clavePublica,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(password)
  );
  // var rsa = new RSAKey();
  console.log(datosCifrados.toString("base64"))
  return datosCifrados
}

generateCombinations()
