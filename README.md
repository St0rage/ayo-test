## 1. Overview

Project ini merupakan automation technical test pada aplikasi web dan mobile Ayo Indonesia, serta dilengkapi dengan simulasi database untuk mendukung pengujian data. Automation ini dibangun menggunakan framework WebdriverIO dengan bahasa pemrograman TypeScript.

Tujuan dari project ini adalah untuk melakukan validasi otomatis terhadap fitur-fitur utama aplikasi, termasuk validasi data pada level UI maupun database. Framework ini dirancang dengan pendekatan Page Object Model (POM) sehingga meningkatkan maintainability, readability, dan reusability script automation.

Automation test yang tersedia mencakup pengujian fungsional pada aplikasi web dan mobile, seperti proses registrasi dan login pengguna, navigasi antar halaman, serta verifikasi pesan validasi yang ditampilkan oleh sistem.

Selain itu, project ini juga dilengkapi dengan database testing yang berfokus pada proses booking, yang digunakan untuk memastikan bahwa data booking yang tersimpan di database sesuai dengan kriteria yang telah ditentukan pada test case.

---

## 2. Technology Stack

| Technology  | Description                              |
| ----------- | ---------------------------------------- |
| TypeScript  | Bahasa pemrograman utama                 |
| WebdriverIO | Automation testing framework             |
| Node.js     | Runtime environment                      |
| Mocha       | Test runner                              |
| Appium      | Mobile automation framework              |
| PostgreSQL  | Database untuk testing dan validasi data |

---

## 3. Project Structure

```text
ayo-test
│
├── scenario_docs
│   └── ayo_test_scenario.xlsx
│
├── sql
│   └── db.sql
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
│   ├── specs
│   │   ├── database
│   │   │   └── booking.ts
│   │   │
│   │   ├── mobile
│   │   │   ├── login-mobile.ts
│   │   │   └── register-mobile.ts
│   │   │
│   │   └── web
│   │       ├── login-web.ts
│   │       └── register-web.ts
│   │
│   └── utils
│       └── database.ts
│
├── .env-example
├── package.json
├── README.md
├── tsconfig.json
├── wdio.db.conf.ts
├── wdio.mobile.conf.ts
└── wdio.web.conf.ts

```

### Folder Description

#### `pageobjects`

Berisi locator dan method yang digunakan untuk berinteraksi dengan halaman aplikasi menggunakan konsep Page Object Model (POM).

#### `specs`

Berisi test scenario dan test case automation.

#### `utils`

Berisi kumpulan file helper yang digunakan untuk mendukung proses automation testing, seperti fungsi utilitas yang dapat digunakan ulang di berbagai test case.

#### `scenario_docs`

Berisi dokumen test scenario yang digunakan sebagai referensi dalam pembuatan automation script.

#### `sql`

Berisi script SQL untuk pembuatan tabel, relasi, constraint, dan data awal yang digunakan dalam pengujian.

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

### PostgreSQL Database

Project ini menggunakan PostgreSQL untuk kebutuhan validasi data booking pada database.

Pastikan PostgreSQL telah terinstall dan service database dalam keadaan berjalan.

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

### Database Setup

Jalankan file SQL yang tersedia pada folder sql untuk membuat tabel dan data awal.

---

## 6. Environment Configuration

Copy file `.env-example` menjadi `.env` pada root project.

Contoh:

```env
# ANDROID DEVICE
DEVICE_NAME="<nama_device_android>"
# POSTGRE DB
DB_HOST=<host_postgre_db default localhost>
DB_PORT=<port_postgre_db default 5432>
DB_DATABASE=<nama_database_postgre_db>
DB_USER=<user_postgre_db>
DB_PASSWORD=<password_postgre_db>
```

Sesuaikan nilai konfigurasi dengan environment yang digunakan.

---

## 7. Running Test

### Menjalankan Seluruh Test Web

```bash
npx wdio run wdio.web.conf.ts
```

### Menjalankan Seluruh Test Mobile

```bash
npx wdio run wdio.mobile.conf.ts
```

### Menjalankan Seluruh Test Database

```bash
npx wdio run wdio.db.conf.ts
```
