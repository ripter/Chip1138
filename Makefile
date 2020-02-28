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
	npx eslint --fix src/ test/

test: lint
	$(NPM_BIN)/mocha --opts mocha.opts

test.only:
	$(NPM_BIN)/mocha --opts mocha.opts

watch:
	$(NPM_BIN)/webpack --env.dev --progress --colors -d --watch
