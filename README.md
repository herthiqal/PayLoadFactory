# PayloadFactory: Adversary Simulation & Evasion Lab
**An Educational Framework for Red Team Payload Generation & Obfuscation**


## Overview
**PayloadFactory** is a full-stack security tool built on **Base44** designed to demonstrate how modern malware bypasses static and dynamic analysis. This project allows security researchers to generate "Safe-Malware" (PoC) scripts that execute benign actions like launching `calc.exe` while employing advanced evasion techniques used by real-world threat actors.

### Key Features
* **Multi-Vector Generation:** Supports PowerShell, VBScript, and Batch payloads.
* **Dynamic Obfuscation Engine:** Implements variable randomization to bypass signature-based detection.
* **Base64 Encoding Layer:** Conceals command intent from simple string-matching scanners.
* **Secure Dashboard:** Role-Based Access Control (RBAC) ensures only authorized users can generate and view payload history.


###  Security Deep Dive: Evasion & Obfuscation Techniques

This project serves as a **Red Team Payload Framework** designed to demonstrate how attackers bypass signature-based detection and heuristic analysis:

#### 1. Signature Evasion via Polymorphism
Modern Antivirus (AV) and Endpoint Detection & Response (EDR) tools use "signatures" (unique hashes) to identify known malicious files. 
* **The Technique:** This tool utilizes **Variable Randomization**. By dynamically changing variable names and function headers during each generation cycle, the file's hash changes every time.
* **The Result:** This forces security software to rely on more resource-heavy "Behavioral Analysis" rather than a simple database lookup.

#### 2. String Obfuscation & Base64 Encoding
Security scanners often flag specific "suspicious" strings (e.g., `Invoke-Expression` or `DownloadString`).
* **The Technique:** All payloads are processed through a **Base64 Encoding layer**. This hides the "intent" of the script from static scanners.
* **The Result:** The script appears as a harmless string of characters until it is decoded and executed in memory (RAM).

#### 3. Living off the Land (LotL)
To remain "quiet" on a network, attackers avoid bringing their own tools and instead use what is already there.
* **The Technique:** My generator focuses on **Native Binaries** like `PowerShell`.
* **The Result:** Because these are trusted Windows processes, many security tools will "allow" their execution.


##  Tech Stack & Architecture
* **Platform:** Base44 (Infrastructure & Backend)
* **Frontend:** React-based UI with Dark Mode aesthetic.
* **Security:** Built-in Authentication & Data Encryption.
* **Version Control:** GitHub (Integrated via Base44 Sync).



###  Target Environment & Requirements

This framework is specifically designed for **Windows-based security auditing**. While the dashboard is a web-based interface, the generated payloads are designed to test the following environments:

* **Primary Operating Systems:** Windows 10 / Windows 11 (64-bit)
* **Target Defenses:** * **Microsoft Defender Antivirus** (Core focus)
    * **Third-Party EDR/AV Solutions** (Norton, McAfee, Bitdefender, etc.)
    * **AMSI (Antimalware Scan Interface)**
* **Execution Environment:** * **PowerShell 5.1+**
    * **Windows Script Host** (for VBScript payloads)
    * **Command Prompt** (for Batch payloads)

> **Note:** These payloads will not execute on macOS or Linux as they rely on native Windows binaries and internal system processes.

##  Ethical Disclaimer
This tool is for **educational and authorized testing purposes only**. The author is not responsible for any misuse of this software. All generated payloads are designed to be non-malicious and are used to test the efficacy of defensive security controls (AV/EDR).
