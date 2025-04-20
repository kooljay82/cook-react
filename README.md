# 🍳 cook-react-app

A friendly CLI tool to "cook" a fresh React project based on kooljay's boilerplate.

CRA(\*deprecated)처럼 편하게 'react-boiler-plate'를 설치하고 프로젝트를 시작하세요.

---

## ⚡ Requirements

- Node.js **>= 23.0.0**  
  `react-boiler-plate`는 Node 23 이상에서만 설치 및 실행이 가능합니다.  
  로컬 개발 환경에서 Node 버전을 관리하고 있다면 아래처럼 설정할 수 있습니다:

```bash
# using nvm
nvm install 23
nvm use 23
```

---

## 🚀 Usage

```bash
npx cook-react-app my-app
```

---

## 🍽️ What happens

1. `my-app`이라는 이름으로 새 디렉토리를 생성합니다.
2. [`react-boiler-plate`](https://github.com/kooljay82/react-boiler-plate)를 clone 합니다.
3. `.git` 디렉토리를 제거하고 새롭게 프로젝트를 초기화합니다.
4. `package.json`의 이름을 `my-app`, 버전을 `1.0.0`으로 변경합니다.
5. 셋업 완료 메시지를 출력합니다.

---

## 🧑‍🍳 After cooking

```bash
cd my-app
npm install
npm start
```

---

## 🧪 Example output

```bash
npx cook-react-app my-app

👨‍🍳 Welcome to cook-react-app!
🍳 What’s your project name? → my-app
🥄 Cooking "my-app" from template...

✅ "my-app" is ready to serve!

🍽️ Now run:

  cd my-app
  npm install
  npm start
```

---

## 📦 Template Repository

- GitHub: [kooljay82/react-boiler-plate](https://github.com/kooljay82/react-boiler-plate)

---

## 🪪 License

ISC © kooljay82

---

Made with ❤️ by Jay
