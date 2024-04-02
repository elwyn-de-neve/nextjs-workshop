```bash
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

```prisma
model User {
  id        String   @id @default(cuid())
  username  String   @unique
  firstName String?
  lastName  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

```bash
npx prisma generate
npx prisma db push
```