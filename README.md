# How to use boomerang JS library

## Getting Started

First you need to add the `boomerang` directory to your source project directory

## Running the tests

In your `index.hmtl` add the next code

```html
<script>
	BOOMR.init({
                beacon_url: "http://172.18.84.139:9902/event",
                BW: {
                     base_url: "http://172.18.84.138/example/boomerang/images/",
                     block_beacon: true
                }
	});
</script>
```
This is a example for `bw plugin`

## Deployment

When you enter to the page you can see in the JS console the data that you are monitoring with the plugin.
