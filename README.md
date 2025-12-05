# Learning TypeScript

## Building containers

There's a convenience script at `/bin/rebuild.hs` that does this:

```
docker compose -f docker/docker-compose.yml down --volumes --remove-orphans
docker compose -f docker/docker-compose.yml build
docker compose -f docker/docker-compose.yml up --detach
```

## Start the stub web service for integration tests

```
docker exec -it learning-typescript-node-1 npm run dev
```


## Starting test watcher

```
docker exec -it learning-typescript-node-1 npm run test:ui
```

## Running ESLint

```
# ad hoc
docker exec -it learning-typescript-node-1 npx eslint

# watch for changes
docker exec -it learning-typescript-node-1 npm run lint:watch
```

## Getting tsc to check the code

```
# ad hoc
docker exec -it learning-typescript-node-1 npx tsc --noEmit

# watch for changes
docker exec -it learning-typescript-node-1 npx tsc --watch --noEmit
```

## See code coverage

Open `/coverage/index.html` in a browser (using a file URL).
For me it's `file://wsl.localhost/Ubuntu/home/adam/source/learning-typescript/coverage/index.html`
