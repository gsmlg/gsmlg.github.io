default:
	./build_web.sh
	docker run --rm -v $$(pwd):/app -v $$(pwd)/build.sh:/build.sh --entrypoint /build.sh gsmlg/phoenix
	\cp _build/prod/rel/gsmlg/releases/$$(grep version mix.exs |awk -F'["]' '{print $$2}')/gsmlg.tar.gz .

build-release:
	./build_web.sh
	docker run --rm -v $$(pwd):/app -v $$(pwd)/build.sh:/build.sh --entrypoint /build.sh gsmlg/phoenix

copy:
	\cp _build/prod/rel/gsmlg/releases/$$(grep version mix.exs |awk -F'["]' '{print $$2}')/gsmlg.tar.gz .

ghpage:
	git branch -D __tmp
	BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
	./build_web.sh
	git checkout -b __tmp
	git add -f priv/static
	git commit -m 'publish ghpage'
	git push origin `git subtree split --prefix priv/static `:master --force
	git checkout ${BRANCH}
