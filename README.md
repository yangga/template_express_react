# project-p-admin

이 프로젝트는 한 프로젝트에서 api 서버와 client 서버를 동시에 개발하기 위해 구조화된 프로젝트이다

## #시작하기 전에...
### 프로젝트 배경
* 로컬에서 api&client 웹 서버를 동시에 개발하고 싶었다
* react & webpack을 사용하고 싶었지만, webpack 설정이 너무 괴로웠다
* 그러던 도중, parcel(https://parceljs.org/) 이란 packer를 발견하였다. webpack의 기능을 해주는데, 세팅할 것도 없고 속도도 빠르다.
* 자주 이런 서버를 만들 것 같아, 템플릿으로 저장 해 보려 한다.

## #시작하기
### 개발시에는
#### API 서버 실행 방법
* NODE_ENV 환경 변수의 값을 development 로 설정
* 원하는 방법으로 src/server/index.js 를 실행한다. (Debugging 가능)
#### Client 실행 방법
* npm run dev

### #릴리즈 버전 실행시에는
#### 빌드 방법
* npm run build
#### 실행 방법
* npm run start
* (귀찮아서 start 스크립트에 build도 넣어둠. 분리하고 싶으면 알아서 분리하세용.)

