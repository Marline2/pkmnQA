# PKMN QA

## 특정 인물에 대한 Q&A 모바일 전용 사이트

### 포켓몬스터에 등장하는 캐릭터 "미끄메라"를 사용했습니다.

시연 영상: https://youtube.com/shorts/QAQhFF369Mo?feature=share<br/><br/>

![QA](/src/img/QA.PNG)

Firestore과 연동하여, 입력 데이터를 추가할 수 있습니다.<br/>
문제 부분에서는 가운데 사진(미끄메라)을 잡고 왼쪽, 오른쪽으로 잡고 가져다 놓음으로 O와 X를 선택합니다.<br/><br/>
모든 문제를 다 풀면 총 점수와 점수에 해당되는 메세지가 표시됩니다. <br/>정답 보기 버튼과 메세지 남기기 버튼이 있습니다.<br/><br/>
메세지를 남기면 다른 사람들의 점수와 비교한 자신의 순위를 알 수 있습니다. <br/>테스트에 참여한 총 사람 수가 표시되며, 자신의 결과란은 하이라이트가 되어 표시됩니다.<br/><br/>

화면이 로딩 중이면 로딩 중 화면을 표시합니다.<br/>

## 추가한 프로그램, 라이브러리

[NVM(Node Version Manager)](https://nodejs.org/ko/docs/)

- node를 설치하는 툴
- 수 많은 버전을 마음대로 골라 설치할 수 있습니다.

```html
nvm install [설치할 버전]
```

[yarn](https://yarnpkg.com/)

- Javascript의 Package Manager입니다.
- package.json을 통해 의존 패키지를 구분하고 프로젝트에서 어떤 일을 할지 결정합니다.

```html
npm install [-g(선택)] yarn
```

[CRA(Create React App)](https://create-react-app.dev/)

- 웹사이트를 만들 때 필요한 것을 넣어 만든 패키지입니다.

```html
yarn create react-app [만들 프로젝트명]
```

[react-router-dom](https://v5.reactrouter.com/web/guides/primary-components)

- 웹사이트를 만들 때 필요한 것을 넣어 만든 패키지입니다.

```html
yarn add react-router-dom
```

[Redux](https://ko.redux.js.org/introduction/getting-started/)

- 상태 관리 라이브러리입니다.

```html
yarn add redux react-redux
```

[firestore](https://firebase.google.com/)

- realtime-database를 제공하는 서비스입니다.

```html
yarn add firebase
```

[thunk](https://www.npmjs.com/package/redux-thunk)

- 비동기 통신에 필요한 미들웨어입니다.

```html
yarn add redux-thunk
```

## 추가한 CSS 자료

[styled-components](https://styled-components.com/)

- 직관적인 코드로 쉽게 사용할 수 있습니다.

```html
yarn add styled-components
```
