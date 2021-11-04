# Grafana energy consumption dashboard

![Dashboard][dashboard]

Since some of you would like to know how you can just build a consumption dashboard like what I have. I decided to share my SQL code with everyone so that it might be easier for everyone to build the same dashboard.

To make this dashboard I used the [InfluxDB][influxdb-addon] and [Grafana][grafana-addon] plugin from the [hass.io][hassio] add-on store.

As you can see on the photo, I have divided my dashboard into sections and given a number, this way you can easily find below which code was used for which part.

**Pay attention!** The code only ensures that the right data comes into your chart, the design is something you still have to set yourself.

Also pay attention to the price variables in the code called:

- ***POWER_PRICE***

This must be replaced with a value that you pay for your energy bill, in order to generate the right calculations for you.

## Section 1

```sql
SELECT sum("value")  / 1000 FROM "kW" WHERE ("entity_id" = 'power_consumption') AND $timeFilter GROUP BY time(1h) fill(none)
```

## Section 2 & 6

```sql
SELECT sum("value")  / 1000 FROM "kW" WHERE ("entity_id" = 'power_consumption') AND $timeFilter GROUP BY time(1d) fill(null)
```

## Section 3 & 6

```sql
SELECT sum("value")  * POWER_PRICE / 1000 FROM "kW" WHERE ("entity_id" = 'power_consumption') AND $timeFilter GROUP BY time(1d) fill(null)
```

## Section 4

```sql
SELECT sum("value")  * POWER_PRICE / 1000 FROM "kW" WHERE ("entity_id" = 'power_consumption') AND $timeFilter GROUP BY time(7d) fill(null)
```

## Section 5

```sql
SELECT sum("value")  * POWER_PRICE / 1000 FROM "kW" WHERE ("entity_id" = 'power_consumption') AND $timeFilter GROUP BY time(30d) fill(null)
```

# HomeAssistant Energy Dashboard
Here Is The New Dashboard On HomeAssistant For Energy
![Dashboard-Energy][dashboard-energy]



[dashboard]: /extras/img/useage-dashboard.png
[dashboard-energy]: /extras/img/energy-monitor.png
[influxdb-addon]: https://github.com/hassio-addons/addon-influxdb
[grafana-addon]: https://github.com/hassio-addons/addon-grafana
[hassio]: https://www.home-assistant.io/hassio/
