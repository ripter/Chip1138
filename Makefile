.PHONY: all clean lint test test.only
NPM_BIN=./node_modules/.bin

all: build test

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

node_modules/: package.json
	npm install
	touch node_modules/

lint: node_modules/
	npx eslint src test const --ext .mjs

test: lint test.only

test.only:
	npx mocha 'test/**/*.test.mjs' 'src/**/*.test.mjs'

