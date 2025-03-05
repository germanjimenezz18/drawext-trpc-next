# Drawext tRPC-Next

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Description

Drawext is drawer web aplication with AI recognition based on [TLdraw](https://github.com/tldraw) that leverages [Next.js](https://nextjs.org), [tRPC](https://trpc.io), and TypeScript to create an optimized and scalable development experience.

**Tech Stack**:

- Next.js (Full-stack framework for React)
- tRPC (Type-safe API framework for TypeScript)
- React Query (Async data fetching and caching)
- Zustand (Global state management)
- Vercel AI SDK (Vercel AI SDK for generative models)

## Prerequisites

Ensure you have the following software installed:

- Node.js (version 14.x or higher)
- npm, yarn, pnpm, or bun (prefered pnpm)

---

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/germanjimenezz18/drawext-trpc-next.git
   cd drawext-trpc-next
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Copy the example environment variables file to `.env`:

   ```bash
   cp .env.example .env
   ```

---

## Usage

To start the development server, run:

```bash
pnpm run dev
```

---

## Testing the API

To test the API calls, you can use a tool like Postman or cURL. For example, to test the `/api/trpc/getDocument` endpoint, you can run:

```bash
curl -X GET http://localhost:3000/api/trpc/getDocument
```

To test the /api/trpc/saveDocument endpoint, you can run:

```bash
curl 'http://localhost:3000/api/trpc/saveDocument?batch=1' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'content-type: application/json' \
  --data-raw '{"0":{"document":{"store":{"document:document":{"gridSize":10,"name":"","meta":{},"id":"document:document","typeName":"document"},"page:page":{"meta":{},"id":"page:page","name":"Page 1","index":"a1","typeName":"page"},"shape:eDd1z43WqYdu0Sn5-aJxZ":{"x":742,"y":572,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:eDd1z43WqYdu0Sn5-aJxZ","type":"draw","props":{"segments":[{"type":"free","points":[{"x":0,"y":0,"z":0.5},{"x":-4,"y":0,"z":0.5},{"x":-17,"y":2,"z":0.5},{"x":-60,"y":9,"z":0.5},{"x":-98,"y":14,"z":0.5},{"x":-132,"y":14,"z":0.5},{"x":-155,"y":13,"z":0.5},{"x":-167,"y":10,"z":0.5},{"x":-172,"y":9,"z":0.5},{"x":-173,"y":8,"z":0.5},{"x":-173,"y":7,"z":0.5},{"x":-173,"y":3,"z":0.5},{"x":-173,"y":-5,"z":0.5},{"x":-172,"y":-15,"z":0.5},{"x":-164,"y":-32,"z":0.5},{"x":-156,"y":-46,"z":0.5},{"x":-147,"y":-60,"z":0.5},{"x":-137,"y":-75,"z":0.5},{"x":-127,"y":-88,"z":0.5},{"x":-120,"y":-97,"z":0.5},{"x":-116,"y":-101,"z":0.5},{"x":-113,"y":-103,"z":0.5},{"x":-113,"y":-101,"z":0.5},{"x":-113,"y":-87,"z":0.5},{"x":-113,"y":-63,"z":0.5},{"x":-113,"y":-35,"z":0.5},{"x":-113,"y":-3,"z":0.5},{"x":-112,"y":28,"z":0.5},{"x":-107,"y":53,"z":0.5},{"x":-105,"y":65,"z":0.5},{"x":-103,"y":71,"z":0.5},{"x":-102,"y":74,"z":0.5},{"x":-101,"y":75,"z":0.5},{"x":-103,"y":73,"z":0.5},{"x":-110,"y":66,"z":0.5},{"x":-119,"y":53,"z":0.5},{"x":-127,"y":39,"z":0.5},{"x":-134,"y":26,"z":0.5},{"x":-143,"y":10,"z":0.5},{"x":-148,"y":0,"z":0.5},{"x":-151,"y":-9,"z":0.5},{"x":-152,"y":-14,"z":0.5},{"x":-153,"y":-17,"z":0.5},{"x":-155,"y":-24,"z":0.5},{"x":-158,"y":-28,"z":0.5},{"x":-160,"y":-32,"z":0.5},{"x":-161,"y":-34,"z":0.5},{"x":-163,"y":-38,"z":0.5},{"x":-164,"y":-41,"z":0.5},{"x":-167,"y":-47,"z":0.5},{"x":-167,"y":-49,"z":0.5},{"x":-167,"y":-51,"z":0.5},{"x":-167,"y":-53,"z":0.5},{"x":-167,"y":-54,"z":0.5},{"x":-167,"y":-55,"z":0.5},{"x":-168,"y":-56,"z":0.5},{"x":-168,"y":-57,"z":0.5},{"x":-162,"y":-57,"z":0.5},{"x":-144,"y":-49,"z":0.5},{"x":-121,"y":-43,"z":0.5},{"x":-99,"y":-37,"z":0.5},{"x":-78,"y":-31,"z":0.5},{"x":-58,"y":-25,"z":0.5},{"x":-39,"y":-20,"z":0.5},{"x":-20,"y":-14,"z":0.5},{"x":3,"y":-6,"z":0.5},{"x":23,"y":0,"z":0.5},{"x":39,"y":4,"z":0.5},{"x":48,"y":7,"z":0.5}]}],"color":"black","fill":"none","dash":"draw","size":"m","isComplete":true,"isClosed":false,"isPen":false,"scale":1},"parentId":"page:page","index":"a1","typeName":"shape"},"shape:sos7v2E3_sOxI8HlWrSC1":{"x":528,"y":207,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:sos7v2E3_sOxI8HlWrSC1","type":"draw","props":{"segments":[{"type":"free","points":[{"x":0,"y":0,"z":0.5},{"x":0,"y":1,"z":0.5},{"x":5,"y":3,"z":0.5},{"x":15,"y":6,"z":0.5},{"x":29,"y":7,"z":0.5},{"x":50,"y":10,"z":0.5},{"x":81,"y":13,"z":0.5},{"x":112,"y":17,"z":0.5},{"x":140,"y":18,"z":0.5},{"x":166,"y":23,"z":0.5},{"x":187,"y":26,"z":0.5},{"x":208,"y":30,"z":0.5},{"x":225,"y":36,"z":0.5},{"x":237,"y":42,"z":0.5},{"x":244,"y":48,"z":0.5},{"x":246,"y":53,"z":0.5},{"x":246,"y":61,"z":0.5},{"x":246,"y":72,"z":0.5},{"x":244,"y":87,"z":0.5},{"x":231,"y":111,"z":0.5},{"x":220,"y":129,"z":0.5},{"x":201,"y":154,"z":0.5},{"x":183,"y":179,"z":0.5},{"x":166,"y":201,"z":0.5},{"x":149,"y":219,"z":0.5},{"x":139,"y":228,"z":0.5},{"x":131,"y":232,"z":0.5},{"x":125,"y":234,"z":0.5},{"x":122,"y":234,"z":0.5},{"x":120,"y":234,"z":0.5},{"x":115,"y":232,"z":0.5},{"x":109,"y":226,"z":0.5},{"x":104,"y":215,"z":0.5},{"x":99,"y":202,"z":0.5},{"x":96,"y":187,"z":0.5},{"x":93,"y":173,"z":0.5},{"x":92,"y":160,"z":0.5},{"x":92,"y":152,"z":0.5},{"x":93,"y":144,"z":0.5},{"x":98,"y":130,"z":0.5},{"x":106,"y":112,"z":0.5},{"x":115,"y":99,"z":0.5},{"x":123,"y":89,"z":0.5},{"x":131,"y":80,"z":0.5},{"x":138,"y":74,"z":0.5},{"x":143,"y":69,"z":0.5},{"x":145,"y":68,"z":0.5},{"x":145,"y":67,"z":0.5},{"x":146,"y":67,"z":0.5},{"x":147,"y":66,"z":0.5},{"x":148,"y":66,"z":0.5}]}],"color":"black","fill":"none","dash":"draw","size":"m","isComplete":true,"isClosed":false,"isPen":false,"scale":1},"parentId":"page:page","index":"a20uS","typeName":"shape"}},"schema":{"schemaVersion":2,"sequences":{"com.tldraw.store":4,"com.tldraw.asset":1,"com.tldraw.camera":1,"com.tldraw.document":2,"com.tldraw.instance":25,"com.tldraw.instance_page_state":5,"com.tldraw.page":1,"com.tldraw.instance_presence":6,"com.tldraw.pointer":1,"com.tldraw.shape":4,"com.tldraw.asset.bookmark":2,"com.tldraw.asset.image":5,"com.tldraw.asset.video":5,"com.tldraw.shape.group":0,"com.tldraw.shape.text":2,"com.tldraw.shape.bookmark":2,"com.tldraw.shape.draw":2,"com.tldraw.shape.geo":9,"com.tldraw.shape.note":8,"com.tldraw.shape.line":5,"com.tldraw.shape.frame":0,"com.tldraw.shape.arrow":5,"com.tldraw.shape.highlight":1,"com.tldraw.shape.embed":4,"com.tldraw.shape.image":4,"com.tldraw.shape.video":2,"com.tldraw.binding.arrow":0}}}}}'
```

To test the /api/trpc/completion endpoint, you can run:

``` bash
curl -X POST http://localhost:3000/api/trpc/completion -H "Content-Type: application/json" -d '{
  "image": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
  "apiKey": "your-api-key",
}'
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
