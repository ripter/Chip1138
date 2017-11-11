.PHONY: all build dev-server server plop lint test test.only
NPM_BIN=./node_modules/.bin

all: build lint server

build: node_modules/
	npx webpack

dev-server: build
	npx webpack-dev-server --open

server: build
	npx http-server --open

node_modules/: package.json
	npm install
	-touch node_modules/

plop: node_modules/
	npx plop

lint: node_modules/
	npx eslint src/ test/

test: lint
	npx mocha --opts mocha.ops

test.only:
	npx mocha --opts mocha.ops

test.blink:
	# npx mocha --opts mocha.ops --require babel-register
	mocha -R @ripter/mocha-reporter-blink1
