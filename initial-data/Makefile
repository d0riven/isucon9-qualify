all: build install-sql

build: result/initial.sql
result/initial.sql: Dockerfile *.tsv *.pl
	docker build -t isucon9-qualify/initial-data .
	docker run -v $(shell pwd)/result:/opt/initial-data/result -v $(shell pwd)/pwcache:/opt/initial-data/pwcache isucon9-qualify/initial-data

install-sql:
	install -m 0644 result/initial.sql ../webapp/sql/initial.sql

# ベンチマーク用画像データダウンロード
images: v3_bench1
	mv $< $@
	touch $@
v3_bench1: bench1.zip
	unzip $<
bench1.zip:
	curl -L https://github.com/isucon/isucon9-qualify/releases/download/v2/bench1.zip -o $@
