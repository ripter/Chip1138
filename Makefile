.PHONY: all build clean deploy lint server test test.only
NPM_BIN=./node_modules/.bin

all: build test server

build: node_modules/

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

deploy: test build

server: build
	npx webpack-dev-server --open

node_modules/: package.json
	npm install
	touch node_modules/

lint: node_modules/
	npx eslint src/ test/

test: lint test.only

test.only:
	npx jest

watch:
	$(NPM_BIN)/webpack --env.dev --progress --colors -d --watch
