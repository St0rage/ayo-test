## 1. Overview

Project ini merupakan automation technical test pada aplikasi web dan mobile Ayo Indonesia yang dibuat menggunakan framework WebdriverIO dengan bahasa pemrograman TypeScript.

Tujuan dari project ini adalah untuk melakukan validasi otomatis terhadap fitur-fitur utama aplikasi. Framework ini dirancang menggunakan pendekatan Page Object Model (POM) untuk meningkatkan maintainability, readability, dan reusability dari automation script.

Automation test yang tersedia mencakup pengujian fungsional pada aplikasi web maupun mobile, seperti proses registrasi/login pengguna, navigasi halaman, serta verifikasi pesan validasi yang ditampilkan oleh sistem.

---

## 2. Technology Stack

| Technology | Description |
|------------|-------------|
| TypeScript | Bahasa pemrograman utama |
| WebdriverIO | Automation testing framework |
| Node.js | Runtime environment |
| Mocha | Test runner |
| Appium | Mobile automation framework |

---

## 3. Project Structure

```text
ayo-test
│
├── scenario_docs
│   └── ayo_test_scenario.xlsx
│
├── test
│   ├── pageobjects
│   │   ├── mobile
│   │   │   ├── base-page.ts
│   │   │   ├── global-page.ts
│   │   │   ├── login-page.ts
│   │   │   └── verification-page.ts
│   │   │
│   │   └── web
│   │       ├── base-page.ts
│   │       ├── global-page.ts
│   │       └── verification-page.ts
│   │
│   └── specs
│       ├── mobile
│       │   ├── login-mobile.ts
│       │   └── register-mobile.ts
│       │
│       └── web
│           ├── login-web.ts
│           └── register-web.ts
│
├── package.json
├── tsconfig.json
├── wdio.conf.ts
├── .env-example
└── README.md
```

### Folder Description

#### `pageobjects`

Berisi locator dan method yang digunakan untuk berinteraksi dengan halaman aplikasi menggunakan konsep Page Object Model (POM).

#### `specs`

Berisi test scenario dan test case automation.

#### `scenario_docs`

Berisi dokumen test scenario yang digunakan sebagai referensi dalam pembuatan automation script.

---

## 4. Prerequisites

Pastikan perangkat telah terinstall software berikut sebelum menjalankan automation test.

### Node.js

Versi yang direkomendasikan:

```bash
Node.js >= 18
```

Verifikasi instalasi:

```bash
node -v
npm -v
```

### Appium

Project mobile automation menggunakan Appium sebagai automation server.

Versi yang direkomendasikan:

```bash
Appium >= 3.x
```

Verifikasi instalasi:

```bash
appium -v
```

### UiAutomator2 Driver

Project mobile automation menggunakan UiAutomator2 sebagai automation driver untuk Android.

Install driver:

```bash
appium driver install uiautomator2
```

Verifikasi driver yang terinstall:

```bash
appium driver list --installed
```

Contoh output:

```text
uiautomator2@<version> [installed]
```

### Android SDK

Pastikan Android SDK telah terinstall dan environment variable berikut telah dikonfigurasi:

```text
ANDROID_HOME
ANDROID_SDK_ROOT
```

Verifikasi instalasi:

```bash
adb version
```

---

## 5. Installation

### Clone Repository

```bash
git clone https://github.com/St0rage/ayo-test.git
```

### Masuk ke Folder Project

```bash
cd ayo-test
```

### Install Dependency

```bash
npm install
```

---

## 6. Environment Configuration

Copy file `.env-example` menjadi `.env` pada root project.

Contoh:

```env
DEVICE_NAME="<nama device android>"
```

Sesuaikan nilai konfigurasi dengan environment yang digunakan.

---

## 7. Running Test

### Menjalankan Seluruh Test

WebdriverIO:

```bash
npx wdio run wdio.conf.ts
```

### Menjalankan Test Suite Tertentu

WebdriverIO:

```bash
npx wdio run wdio.conf.ts --suite web
```

```bash
npx wdio run wdio.conf.ts --suite mobile
```

### Menjalankan Test File Tertentu

WebdriverIO:

```bash
npx wdio run wdio.conf.ts --spec login-mobile.ts
```

```bash
npx wdio run wdio.conf.ts --spec login-web.ts
```