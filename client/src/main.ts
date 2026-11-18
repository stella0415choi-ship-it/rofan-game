import './styles/tokens.css';

type Theme = 'day' | 'night';

function setTheme(theme: Theme) {
  document.body.dataset.theme = theme;
}

async function checkServer(): Promise<string> {
  try {
    const res = await fetch('/api/health');
    const data = (await res.json()) as { ok: boolean };
    return data.ok ? '서버 연결됨' : '서버 응답 이상';
  } catch {
    return '서버에 연결할 수 없음 (npm run dev 로 서버를 켜 줘)';
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <main style="max-width:720px;margin:0 auto;padding:64px 24px;text-align:center">
    <h1 style="font-size:40px;color:var(--accent)">로판 미연시</h1>
    <p id="status">서버 확인 중…</p>
    <button id="toggle" style="font-size:20px;padding:12px 28px;border:2px solid var(--gold);background:var(--accent);color:var(--on-accent);cursor:pointer">
      낮 / 밤 전환
    </button>
  </main>
`;

document.querySelector('#toggle')!.addEventListener('click', () => {
  setTheme(document.body.dataset.theme === 'day' ? 'night' : 'day');
});

checkServer().then((msg) => {
  document.querySelector('#status')!.textContent = msg;
});
