//! Function to convert a byte array to an ASCII string using String.fromCharCode
function bytesToAscii(byteArray) {
  return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// Example usage of bytesToAscii
const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log('bytesToAscii Example:', asciiString); // Output: "Hello"


 
//! Function to convert an ASCII string to a byte array using charCodeAt
function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

//! Example usage of asciiToBytes
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log('asciiToBytes Example:', byteArray); // Output: [72, 101, 108, 108, 111]



//! Function to convert a Uint8Array array to an ASCII string using TextDecoder
function Uint8ArrToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage of Uint8ArrToAscii with TextDecoder
const bytesUint8 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiStringUint8 = Uint8ArrToAscii(bytesUint8);
console.log('Uint8ArrToAscii with TextDecoder Example:', asciiStringUint8); // Output: "Hello"



//! Function to convert an ASCII string to a byte array using Uint8Array
function AsciiToUint8arr(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage of AsciiToUint8arr with Uint8Array
const asciiUint8 = "Hello";
const byteArrayUint8 = AsciiToUint8arr(asciiUint8);
console.log('AsciiToUint8arr with Uint8Array Example:', byteArrayUint8); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
