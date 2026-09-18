# SangPicture 공식 웹사이트

SangPicture의 소개·다운로드·후원 정보를 담은 정적 웹사이트입니다. 백엔드, 로그인, 데이터베이스 없이 HTML, CSS, JavaScript만 사용합니다.

`website` 폴더 안의 파일만 별도의 GitHub 저장소에 올리면 GitHub Pages로 바로 공개할 수 있습니다. 설치 파일은 이 폴더에 넣지 않고 GitHub Releases 링크로 연결하도록 구성했습니다.

## 1. GitHub 저장소 만들기

1. GitHub에 로그인합니다.
2. 오른쪽 위 `+` → `New repository`를 선택합니다.
3. 저장소 이름을 예를 들어 `SangPicture-Website`로 입력합니다.
4. 공개 웹사이트라면 `Public`을 선택합니다.
5. `Add a README file`은 선택하지 않아도 됩니다. 이 폴더의 README를 사용하면 됩니다.
6. `Create repository`를 누릅니다.

## 2. 웹사이트 파일 올리기

이 `website` 폴더 안의 파일과 `assets` 폴더를 새 저장소의 최상위에 올립니다. 저장소 첫 화면에서 `index.html`이 바로 보이는 구조여야 합니다.

최종 구조는 아래와 같습니다.

```text
SangPicture-Website/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   ├─ favicon.svg
   ├─ creator-photo.jpg
   ├─ kakaopay-logo.png
   ├─ sangpicture-icon.png
   ├─ screenshot-placeholder.svg
   └─ kakaopay-qr-placeholder.svg
```

GitHub 웹 화면에서 올릴 때는 `Add file` → `Upload files`를 누르고, 위 파일들을 한 번에 끌어다 놓으면 됩니다. 마지막에 `Commit changes`를 누릅니다.

## 3. GitHub Pages 활성화

1. 저장소에서 `Settings`를 엽니다.
2. 왼쪽 메뉴에서 `Pages`를 선택합니다.
3. `Build and deployment`의 `Source`를 `Deploy from a branch`로 선택합니다.
4. Branch는 `main`, 폴더는 `/ (root)`로 선택합니다.
5. `Save`를 누릅니다.
6. 잠시 기다리면 `Your site is live at ...` 아래에 웹사이트 주소가 표시됩니다.

주소가 바로 열리지 않으면 1~2분 기다린 뒤 새로고침하세요.

## 4. 다운로드·후원·문의 주소 바꾸기

`script.js` 맨 위의 `SITE_CONFIG` 설정 영역만 수정하면 됩니다.

```js
const SITE_CONFIG = {
  latestVersion: "v1.12",
  downloadUrl: "https://github.com/내계정/SangPicture/releases/latest",
  releaseUrl: "https://github.com/내계정/SangPicture/releases",
  hashUrl: "https://github.com/내계정/SangPicture/releases/latest",
  changesUrl: "https://github.com/내계정/SangPicture/releases/latest",
  paypalUrl: "https://www.paypal.me/내PayPal아이디",
  kakaoPayUrl: "카카오페이_송금_주소",
  kakaoQrImage: "assets/kakaopay-qr.png",
  kakaoRecipient: "이상준",
  officialDownloadUrl: "https://github.com/내계정/SangPicture/releases/latest",
  contactEmail: "이메일주소@example.com",
  privacyUrl: "개인정보처리방침_주소",
  licenseUrl: "라이선스_주소",
  copyrightYear: "2026",
};
```

주소를 바꾼 뒤 저장소에 `script.js`와 새 QR 이미지를 다시 올리고 `Commit changes`를 누르면 됩니다. GitHub Pages가 자동으로 새 버전을 반영합니다.

처음에는 `your-account`, `your-paypal-id`, `your-email@example.com` 같은 placeholder가 들어 있습니다. 실제 주소를 정하기 전에는 다운로드와 후원 버튼이 외부 placeholder 페이지로 이동하지 않도록 막혀 있습니다.

### 카카오페이 QR 바꾸기

1. 실제 카카오페이 송금 QR 이미지를 `assets/kakaopay-qr.png`라는 이름으로 준비합니다.
2. 새 이미지를 `assets` 폴더에 올립니다.
3. `script.js`에서 `kakaoQrImage`를 `assets/kakaopay-qr.png`로 바꿉니다.
4. `kakaoPayUrl`과 `kakaoRecipient`도 실제 값으로 바꿉니다.

## 5. GitHub Release에 설치 파일 올리기

1. SangPicture 프로그램 저장소의 `Releases` → `Draft a new release`를 선택합니다.
2. 태그를 예를 들어 `v1.12`처럼 입력합니다.
3. 설치 파일과 SHA-256 해시 파일을 `Attach binaries by dropping them here` 영역에 끌어다 놓습니다.
4. 변경사항을 설명에 적습니다.
5. `Publish release`를 누릅니다.
6. 웹사이트 저장소의 `script.js`에서 `downloadUrl`, `releaseUrl`, `hashUrl`, `changesUrl`을 방금 만든 Release 주소에 맞게 수정합니다.

설치 파일은 웹사이트 저장소에 올리지 말고, 항상 GitHub Release의 첨부 파일로만 제공합니다.

## 6. 로컬에서 확인하기

인터넷 주소 없이도 `index.html`을 브라우저에서 직접 열어 화면을 확인할 수 있습니다. 링크 동작까지 확인하려면 간단한 정적 파일 서버로 `website` 폴더를 열면 됩니다.

## 파일 안내

- `index.html`: 소개, 기능, 스크린샷, 다운로드, 제작자, 후원, 하단 영역
- `style.css`: 파란색 중심의 반응형 디자인과 모바일 화면 규칙
- `script.js`: 다운로드·후원·문의·정책 링크를 모아둔 설정 영역
- `assets/`: 아이콘과 placeholder 이미지
