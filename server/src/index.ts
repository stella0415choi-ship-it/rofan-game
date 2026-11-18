import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(here, '../../client/dist');
const port = Number(process.env.PORT ?? 3001);

const app = Fastify({ logger: true });

// API는 모두 /api 아래에 둔다.
app.get('/api/health', async () => ({ ok: true }));

// 배포 시에는 빌드된 클라이언트를 같은 서버에서 내보낸다.
if (existsSync(clientDist)) {
  await app.register(fastifyStatic, { root: clientDist });
  app.setNotFoundHandler((req, reply) => {
    if (req.url.startsWith('/api')) return reply.code(404).send({ error: 'not found' });
    return reply.sendFile('index.html');
  });
}

await app.listen({ port, host: '0.0.0.0' });
