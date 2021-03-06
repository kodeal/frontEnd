<h1 align="center">⭐코딩 입문자를 위한 인공지능 QnA 서비스 Kodeal⭐</h1>

<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

### :computer: 2022 한국공학대학교 컴퓨터공학과 졸업작품

#### 배포용 테스트 웹사이트 : <a href="https://main.d2m6wbpg3nevk2.amplifyapp.com/"><img src="https://img.shields.io/badge/Kodeal-4285F4?style=for-the-badge&logo=Google Chrome&logoColor=white"></a>

------------

## :speaker: 소개
**Kodeal**은 Codex API 를 활용하여 코딩에 입문하는 사람들이 사용할 수 있는 **즉답형 QnA 서비스** 입니다.

사용자로부터 코드에 관한 질문을 입력받으면 Codex API를 활용한 결과값을 사용자에게 답변으로 출력합니다.

------------

## :pencil2: 프로젝트 계획 동기
프로그래밍을 처음 시작하는 입문자 혹은 경력자 모두 가장 많이 하는 작업 중 하나가 바로 구글링 혹은 스택오버플로우와 같은 사이트를 활용하여 원하는 정보를 얻는 것 입니다.


하지만 특히 입문자에겐 이러한 원하는 정보를 찾는 과정도 하나의 큰 장벽이 될 수 있습니다. 


구글링의 경우 궁금한 내용을 검색하면 대부분 찾을 수 있지만 최신 기술이 빠르게 나오고 프로그래밍 언어의 문법또한 빠르게 변화하는 시대에서 오래전 게시글을 통해 답변을 얻게 될 수도 있어 정보에 대한 스스로의 정제가 필요합니다.


스택오버플로우는 세계 최대의 개발자 포럼인 만큼 많은 질문에 대한 답변 정보가 들어있지만 기본적으로 영어로 진행되기 때문에 입문자에겐 시작부터 큰 어려움으로 다가올 수 있고 직접 답변을 등록하려 
해도 기초적인 수준의 질문에 대해서는 답변을 해주지 않거나 답변 테러를 당할 수 있습니다.


위의 내용들은 저 또한 프로그래밍에 입문할 때 겪어본 경험들이고 많은 입문자들이 프로그래밍 관련 정보를 얻을 때 많은 어려움을 겪을 것 이라 생각했습니다.

따라서 저희는 **입문자들이 관련 정보를 쉽게 얻을 수 있는 서비스를 만들어 많은 사람들이 코딩에 대한 진입장벽이 낮아졌으면** 하는 마음에 이 프로젝트를 시작하게 되었습니다.

------------

## 🐶 Service Flow Diagram

![kodeal Diagram](https://user-images.githubusercontent.com/76273383/156574726-943dfc4f-d07a-4fad-9093-1c2f95db1eac.png)

------------

## ✨ 서비스 구성

### 🖐 메인 화면
![kodeal 메인화면](https://user-images.githubusercontent.com/76273383/158766416-907b18ec-1b96-4240-b377-31ee0b13068b.JPG)

메인화면에서는 서비스에 대한 개요와 서비스 사용 방법을 스크롤 애니매이션을 활용하여 사용자가 서비스에 대한 이해를 쉽게 할 수 있도록 구현했습니다.

### 🖲로그인 화면
![로그인](https://user-images.githubusercontent.com/76273383/160061614-0273d1b9-8e7e-4e2f-8683-3dee8a6dc1df.JPG)

로그인 및 회원가입 기능을 구현하여 각 사용자별 질문 내역들을 불러오고 저장할 수 있도록 사용자 정보 생성을 구현했습니다.

기존에는 사용자가 로그인을 완료했을 때 Redux에 사용자의 정보를 저장하여 이용하려 했으나, 새로고침을 시행하면 Redux의 정보가 모두

사라지는 현상이 발생하여 대신 **쿠키**를 브라우저에 저장해 QnA 서비스 이용시에 쿠키 정보를 활용할 수 있도록 했습니다.

### 💡  QnA 화면
![image](https://user-images.githubusercontent.com/76273383/172795909-33e8ecc7-3c97-46ff-8905-9c91e899cb57.png)

사용자는 kodeal에게 코딩에 관련한 질문을 전송하게 됩니다. 이 과정에서 async/await를 사용하여 동기 프로그래밍으로 구현 시 API 호출이 

완료되는 동안 사용자는 멈춘 화면만 바라보고 있어야 하기 때문에 UX상 좋지 않다고 판단하여 비동기 프로그래밍으로 구현했습니다.

또한 Python, Javacript의 언어를 지원하여 사용자가 원하는 언어에 대한 답변을 받을 수 있도록 했습니다.

### 📊 마이페이지 화면

![image](https://user-images.githubusercontent.com/76273383/175964395-12417985-3fca-4d64-8126-a7bfc5b318c2.png)

마이페이지는 사용자별 주요 정보들을 보여주는 페이지 입니다.

왼쪽에는 프로필 이미지 설정과 개인 정보들을 출력하고 있습니다.

오른쪽 상단에는 chart.js를 활용하여 사용자의 질문 내역에서 자주 질문한 키워드들을 추출하여 표 형식으로 보여주고 있습니다.

오른쪽 하단에는 Github Contribution 기능을 응용하여 각 월별로 사용자의 질문 횟수와 질문 내역을 볼 수 있도록 구현했습니다.
