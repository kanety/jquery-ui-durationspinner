# jquery-ui-durationspinner

Time duration spinner using jquery-ui.

## Dependencies

Include following libraries before use.

* jquery-ui-dist
* moment
* moment-duration-format

## Usage

Create a spinner:

```javascript
$('input.spinner').durationspinner();
```

Change time format to `hh:mm:ss`:

```javascript
$('input.spinner').durationspinner({ format: 'hh:mm:ss', step: 1, page: 60 });
```

You can use `dhms` for the format.

* d: days
* h: hours
* m: minutes
* s: seconds

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
