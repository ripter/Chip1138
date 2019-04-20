.PHONY: all build clean deploy debug lint test test.only test.blink
NPM_BIN=./node_modules/.bin

all: build test server

build: node_modules/

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

deploy: test build

debug:
	$(NPM_BIN)/mocha --opts mocha.opts --inspect-brk

lint: node_modules/
	$(NPM_BIN)/eslint src/ test/

node_modules/: package.json
	npm install
	-touch node_modules/

test: lint
	$(NPM_BIN)/mocha --opts mocha.opts

test.only:
	$(NPM_BIN)/mocha --opts mocha.opts

test.blink:
	$(NPM_BIN)/mocha -R @ripter/mocha-reporter-blink1
