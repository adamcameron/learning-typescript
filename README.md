# Learning TypeScript

## Building containers

There's a convenience script at `/bin/rebuild.hs` that does this:

```
docker compose -f docker/docker-compose.yml down --volumes --remove-orphans
docker compose -f docker/docker-compose.yml build
docker compose -f docker/docker-compose.yml up --detach
```

## Starting test watcher

```
docker exec -it learning-typescript-node-1 npm run test:ui
```

## Running ESLint

```
docker exec -it learning-typescript-node-1 npx eslint
```

## Getting tsc to check the code

```
docker exec -it learning-typescript-node-1 npx tsc --noEmit
```

## See code coverage

Open `/coverage/index.html` in a browser (using a file URL).
For me it's `file://wsl.localhost/Ubuntu/home/adam/source/learning-typescript/coverage/index.html`
