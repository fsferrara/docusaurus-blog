> hint: metrics.dropwizard.io v4

Main concepts here:

- *Metric*: a Metric is contained in the MetricRegistry and it has an unique name (i.e. a dotted-name string) used to retrieve the Metric from the MetricRegistry.

- *MetricRegistry*: it is the container for all the metrics. Usually, there is one MetricRegistry for each application.

- *Meters*: a meter measures the rate of events over time (e.g., “requests per second”). A single meter includes _mean rate_ and _1_ _5_ _15_ moving averages.
  - Instance: `metricRegistry.meter("the.meter.name")`
  - Usage: `meter.mark();`

- *Gauges*: a gauge is an instantaneous measurement of a value.
  - Register with: `metricRegistry.register("the.gauge.name", theGauge);`

- *Counters*: a counter is a gauge for an `AtomicLong`. It is used to count, obviously.
  - Instance: `metricRegistry.counter("the.counter.name")`
  - Usage: `counter.inc();` and/or `counter.dec();`

- *Histograms*: a histogram measures the statistical distribution of values in a stream of data (e.g. the response times). It provides: _minimum_, _maximum_, _mean_, _median_, and _percentiles_ (75th, 90th, 95th, 98th, 99th, and 99.9th).
  - Instance: `metricRegistry.histogram("the.histogram.name")`
  - Usage: `histogram.update(aStreamValue);`

- *Timers*: a timer measures both the rate that a particular piece of code is called (like the a Meter) and the distribution of its duration (like a Histogram).
  - Instance: `metricRegistry.time("the.timer.name")`
  - Usage: `context = timer.time();` and `context.stop()`
