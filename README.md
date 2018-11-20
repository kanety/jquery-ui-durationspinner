# jquery-ui-durationspinner

Time duration spinner using jquery-ui.

## Dependencies

* jquery-ui-dist
* moment
* moment-duration-format

You should include these libraries before use.

## Usage

Create a spinner:

```javascript
$('input.spinner').durationspinner();
```

Change time format to `hh:mm:ss`:

```javascript
$('input.spinner').durationspinner({ format: 'hh:mm:ss', step: 1, page: 60 });
```

You can use `DdHhmSs` as the format.

* D,d: days
* H,h: hours
* m: minutes
* S,s: seconds

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
