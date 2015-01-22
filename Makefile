.PHONY: pass fail test

TAP = ./node_modules/tape/bin/tape
MIN = ./bin/tap-difflet

pass:
	@$(TAP) test/pass.js | $(MIN)
	@$(TAP) test/pass.js | $(MIN) --verbose

fail:
	@$(TAP) test/fail.js | $(MIN)
	@$(TAP) test/fail.js | $(MIN) --verbose

test: pass fail
