1.20.3 / 2024-09-10
===================

  * deps: qs@6.13.0
  * add `depth` option to customize the depth level in the parser
  * IMPORTANT: The default `depth` level for parsing URL-encoded data is now `32` (previously was `Infinity`)

1.20.2 / 2023-02-21
===================

  * Fix strict json error message on Node.js 19+
  * deps: content-type@~1.0.5
    - perf: skip value escaping when unnecessary
  * deps: raw-body@2.5.2

1.20.1 / 2022-10-06
===================

  * deps: qs@6.11.0
  * perf: remove u