export GO111MODULE=on

all: bin/benchmarker bin/benchmark-worker bin/payment bin/shipment

bin/benchmarker: cmd/bench/main.go bench/**/*.go
	go build -o bin/benchmarker cmd/bench/main.go

bin/benchmark-worker: cmd/bench-worker/main.go
	go build -o bin/benchmark-worker cmd/bench-worker/main.go

bin/payment: cmd/payment/main.go bench/server/*.go
	go build -o bin/payment cmd/payment/main.go

bin/shipment: cmd/shipment/main.go bench/server/*.go
	go build -o bin/shipment cmd/shipment/main.go

vet:
	go vet ./...

errcheck:
	errcheck ./...

staticcheck:
	staticcheck -checks="all,-ST1000" ./...

clean:
	rm -rf bin/*
	rm -rf webapp/public/upload
	rm -rf initial-data/images

.PHONY: FORCE
FORCE:

.PHONY: setup
setup: initial-data/result/initial.sql webapp/public/upload initial-data/images
	$(MAKE)
	./bin/benchmarker

# 初期データ作成
initial-data/result/initial.sql:
	$(MAKE) -C initial-data result/initial.sql

# 初期画像データダウンロード
webapp/public/upload: webapp/public/v3_initial_data
	mv $< $@
	touch $@
webapp/public/v3_initial_data: webapp/public/initial.zip
	unzip -d $(<D) $<
webapp/public/initial.zip:
	curl -L https://github.com/isucon/isucon9-qualify/releases/download/v2/initial.zip -o $@

# ベンチマーク用画像データダウンロード
initial-data/images:
	$(MAKE) -C initial-data images

