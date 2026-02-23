Existem 2 formas de tipar os _handlers_ de uma API Route:

1) Tipando o _handler_ diretamente com `NextApiHandler`.

```typescript
import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ curso: 'next.js', instrutor: 'Dev soutinho' });
};

export default handler;
```

2) Tipando as variáveis de requisição e resposta individualmente.

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ curso: 'next.js', instrutor: 'Dev Soutinho' });
};
```

Também é possível tipar a resposta da API utilizando _generics_.

Com `NextApiHandler` devemos passar o `ResponseData` como _generics_ da função:

```typescript
import type { NextApiHandler } from 'next';

export type ResponseData = {
  curso: string;
  instrutor: string;
};

const handler: NextApiHandler<ResponseData> = (req, res) => {
  // res.status(200).json({ nome: 'Mario Souto' });
  res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
};

export default handler;
```

Com `NextApiRequest` e `NextApiResponse` devemos passar `ResponseData` como _generics_ de `NextApiResponse`.

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

export type ResponseData = {
  curso: string;
  instrutor: string;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  // res.status(200).json({ nome: 'Mario Souto' });
  res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
};
```

Descomente a primeira linha do _handler_ e veja o que acontece!