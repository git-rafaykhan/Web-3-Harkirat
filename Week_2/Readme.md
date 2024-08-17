nks vs. Blockchains

## Goal of Today’s Class
- **Objective:** To create a simple web-based wallet.
- **Tasks:**
  - Review the codebases of some wallets to understand private key generation.
  - Compare authentication methods between traditional banks and blockchains.

## Authentication: Banks vs. Blockchains

### How Banks Do Authentication:
- **Username & Password:** 
  - Used to access funds, transfer money, and view transactions. These credentials are stored on centralized servers, making them potentially vulnerable to breaches.

### How Blockchains Do Authentication:
- **Public-Private Key Pair:**
  - Utilizes asymmetric cryptography.
  
#### Public Key:
- A string that can be shared openly and acts as an address on the blockchain.
- Example: A public key listed on Etherscan is available for anyone to see.

#### Private Key:
- A secret string that must remain confidential. It is used to sign transactions and proves ownership of the corresponding public key.

---

## Bits and Bytes

### What is a Bit?
- The smallest unit of data in a computer, with values of either 0 or 1.

### What is a Byte?
- A group of 8 bits, where each byte can represent 256 possible values (0-255).

### Assignment
- **Convert `11001010` to decimal:**
  - The decimal equivalent is `202`.

---

## Representing Bits and Bytes in JavaScript

### Bit:
- Represented in JavaScript as a simple integer.

### Byte:
- Also represented in JavaScript as an integer within a range of 0 to 255.

### Array of Bytes:
- Bytes can be stored and manipulated in an array format in JavaScript.

### UInt8Array:
- A memory-efficient way to store an array of bytes, where each value takes up exactly 1 byte.

#### Why use UInt8Array over native arrays?
- **Less space:** Native arrays take up 64 bits per number, whereas `UInt8Array` elements take up only 1 byte each.
- **Enforced constraints:** Ensures that values do not exceed 255, providing more control over the data.

#### Assignment:
- **What happens to the first element when assigning a value greater than 255?**
  - The value wraps around, so assigning a value of 256 would result in a stored value of 0.

---

## Encodings

### ASCII
- **Definition:** A character encoding standard that uses 7 bits per character, representing 128 characters (including control characters).

### Hex
- **Definition:** A base-16 encoding system where each character represents 4 bits, making it efficient for representing binary data in a readable format.

### Base64
- **Definition:** A base-64 encoding scheme where each character represents 6 bits. It is commonly used for encoding binary data in text-based formats like JSON or XML.

### Base58
- **Definition:** Similar to Base64 but avoids visually similar characters (e.g., '0', 'O', 'I', and 'l') to reduce errors in manual transcription.

### ASCII vs. UTF-8
- **ASCII:** Uses 7-bit encoding and is limited to 128 characters.
- **UTF-8:** A more flexible encoding that uses 1 to 4 bytes per character, allowing it to represent a much larger range of characters from various languages.

---

## Hashing vs. Encryption

### Hashing
- **Definition:** The process of converting data into a fixed-size string of characters, usually represented in hexadecimal. Hashes are designed to be unique and irreversible, meaning you cannot easily derive the original data from the hash.
  
#### Common Hashing Algorithms:
- **SHA-256:** 
  - **Usage:** Commonly used in blockchain technology to secure transactions and in cryptographic applications.
  - **Characteristics:** Produces a 256-bit (32-byte) hash, which is represented as a 64-character hexadecimal string.
  
- **MD5:**
  - **Usage:** Once widely used for integrity checks and storing passwords, but now considered insecure due to vulnerabilities to collision attacks.
  - **Characteristics:** Produces a 128-bit (16-byte) hash, often represented as a 32-character hexadecimal string.

### Encryption
- **Definition:** The process of converting plaintext into unreadable ciphertext using an algorithm and a key. Unlike hashing, encryption is reversible, meaning the original data can be recovered with the correct key.

#### Types of Encryption:

1. **Symmetric Encryption:**
   - **Definition:** The same key is used for both encryption and decryption.
   - **Example:** AES (Advanced Encryption Standard).
   - **Use Case:** Fast and efficient, suitable for encrypting large amounts of data.

2. **Asymmetric Encryption:**
   - **Definition:** Uses a pair of keys—one public and one private. The public key is used for encryption, and the private key is used for decryption.
   - **Example:** RSA (Rivest-Shamir-Adleman).
   - **Use Case:** Secure data transmission over the internet, such as in SSL/TLS protocols.

### Common Asymmetric Encryption Algorithms:
- **RSA (Rivest–Shamir–Adleman):**
  - Widely used for secure data transmission.
- **ECC (Elliptic Curve Cryptography - ECDSA):**
  - Used in Ethereum (ETH) and Bitcoin (BTC) for digital signatures.
- **EdDSA (Edwards-curve Digital Signature Algorithm):**
  - Used in Solana (SOL) for secure digital signatures.

### Asymmetric Encryption in Blockchain:
- **Public Key:** A publicly shared string that acts as an address or identifier.
- **Private Key:** A confidential string used to sign transactions, ensuring authenticity and ownership.

---

## How Blockchain Transactions Work

### User Side:
1. **Keypair Generation:** A user creates a public/private keypair.
2. **Transaction Creation:** The user creates a transaction (e.g., sending Rs 50 to Alice) that includes all necessary details like the recipient's address, the amount, and some blockchain-specific parameters (e.g., latestBlockHash in Solana).
3. **Hashing:** The transaction is hashed to ensure data integrity.
4. **Signing:** The transaction is signed with the user’s private key, providing proof of authenticity.
5. **Transmission:** The raw transaction, signature, and public key are sent to a blockchain node.

### Miner Side:
1. **Hash Verification:** The miner hashes the original transaction message.
2. **Signature Verification:** The miner verifies the signature using the user’s public key and the hash generated in the first step.
3. **Transaction Validation:** The miner checks additional aspects of the transaction, such as ensuring the user has sufficient funds.
4. **Block Addition:** If everything checks out, the transaction is added to the blockchain.

---

## Hierarchical Deterministic (HD) Wallets

- **Definition:** HD Wallets generate a tree of key pairs from a single seed, simplifying the management of multiple accounts by using a single mnemonic phrase.
- **BIP-32:** A standard that defines how HD wallets operate.

### Mnemonics
- **Mnemonic Phrase:** A human-readable string of words (usually 12, 18, or 24) used to generate a cryptographic seed. This seed is then used to generate a master key and derive all subsequent keys.

### Seed Phrase
- **Definition:** A sequence derived from the mnemonic phrase, used to generate keys for various accounts. It must be stored securely as it controls access to all associated funds.

### Derivation Paths
- **Definition:** Specify a systematic way to derive various keys from the master seed. They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency (e.g., if you ever want to port from Phantom to Backpack).

#### Derivation Path Format:
- **`m / purpose' / coin_type' / account' / change / address_index`**
  - **m:** Refers to the master node, or the root of the HD wallet.
  - **purpose:** A constant that defines the purpose of the wallet (e.g., 44' for BIP44, which is a standard for HD wallets).
  - **coin_type:** Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for Solana).
  - **account:** Specifies the account number (e.g., 0' for the first account).
  - **change:** This is either 0 or 1, where 0 typically represents external addresses (receiving addresses), and 1 represents internal addresses (change addresses).
  - **address_index:** A sequential index to generate multiple addresses under the same account and change path.

---

## Elliptic Curve Cryptography

### What is Elliptic Curve Cryptography (ECC)?
- **Definition:** A type of public-key cryptography based on the algebraic structure of elliptic curves over finite fields.
  
### Common Elliptic Curves:
- **secp256k1:** Used in Bitcoin (BTC) and Ethereum (ETH).
- **ed25519:** Used in Solana (SOL).

### How Elliptic Curves Work:
- **Visual Explanation:** Check out this [video on elliptic curves](https://www.youtube.com/watch?v=NF1pwjL9-DE&) for a detailed understanding.

### Use Cases of Public Key Cryptography:
- **SSL/TLS Certificates:** Secure data transmission over the internet.
- **SSH Keys:** Secure connections to servers and pushing code to GitHub.
- **Blockchains and Cryptocurrencies:** Used for securing transactions and generating wallets

