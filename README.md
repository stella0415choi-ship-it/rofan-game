# 로판 미연시

로맨스 판타지 세계관의 역하렘 미연시 + 육성 + 추리 웹 게임.

## 구조

- `client/` : 화면 (Vite + TypeScript). 색과 폰트는 `src/styles/tokens.css`에 모아 둠
- `server/` : 서버 (Fastify + TypeScript). API는 `/api` 아래, 배포 때는 빌드된 client도 같이 내보냄
- `.github/workflows/ci.yml` : push할 때마다 빌드가 되는지 확인

## 처음 한 번

Node 22 이상이 필요해 (`node -v`로 확인).

```bash
npm install
```

## 매일 쓰는 명령

```bash
npm run dev        # 서버(3001) + 화면(5173) 동시에 켜기 → http://localhost:5173
npm run build      # 배포용 빌드
npm start          # 빌드한 걸 서버 하나로 실행 → http://localhost:3001
npm run typecheck  # 타입 검사만
```

## 다음에 할 일

- UI 시안(낮/밤 대화, 시간표, 추리 보드)을 화면으로 옮기기
- 세이브 데이터 저장 방식 정하기
- 배포 위치 정하기
