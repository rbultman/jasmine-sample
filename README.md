# jasmine-sample
This is an example of using [jasmine](https://github.com/jasmine/jasmine-npm) for TDD and 
[istanbul](https://github.com/gotwarlost/istanbul) for code coverage.

### To use this example

Install jasmine and istanbul:

```bash
sudo npm install -g jasmine
sudo npm install -g istanbul
```

Clone the repo:

```bash
git clone https://github.com/rbultman/jasmine-sample
cd jasmine-sample/
```

Run the tests:

```bash
jasmine
```

Example output:

```bash
Started
...........


11 specs, 0 failures
Finished in 0.007 seconds
```

Get code coverage:  

```bash
istanbul cover jasmine
```

Example output:

```bash
Started
...........


11 specs, 0 failures
Finished in 0.006 seconds

=============================================================================
Writing coverage object [/home/rob/source/jasmine-sample/coverage/coverage.json]
Writing coverage reports at [/home/rob/source/jasmine-sample/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 47/47 )
Branches     : 100% ( 4/4 )
Functions    : 100% ( 14/14 )
Lines        : 100% ( 47/47 )
================================================================================
```

Additionally, and HTML report showing the coverage will be in `coverage/lcov-report/index.html`.

