# react.video

[![Build Status](https://travis-ci.org/React-Components-Organization/react.video.svg?branch=master)](https://travis-ci.org/React-Components-Organization/react.video)
[![npm version](https://badge.fury.io/js/react.video.svg)](https://badge.fury.io/js/react.video)

A react video component, built with ES2015.

## Installation

Install the module directly from npm:

```
npm install react.video --save
```

## Usage

A basic usage of ReactVideo and how to call public methods available through this.refs['your-ref'];

```js
import React from 'react';
import ReactVideo from 'react.video';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.onClickPlay = this.onClickPlay.bind(this);
    this.state = {
      muted: false,
      source: [
        {
          src: 'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4',
          type: 'video/mp4'
        }
      ]
    };
  }

  // play() method is called via refs.
  onClickPlay () {
    this.refs.VideoComp.play();
  }

  render () {
    // a basic style object
    const VideoStyle = {
        backgroundColor: 'green'
    };

    return (
      <ReactVideo
        ref={'VideoComp'}
        cls={'custom-video'} 
        height={500} width={'100%'}
        style={VideoStyle}
        muted={this.state.muted}
        src={'http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'}
        source={this.state.source}>
      </ReactVideo>

      <div>
        <div onClick={this.onClickPlay}>muted</div>
      </div>
    );
  }
};

export default App;
```

### Properties

#### cls {string}

>**NOTE:** Coming soon

#### autoPlay {boolean}

>**NOTE:** Coming soon

#### src {string}

>**NOTE:** Coming soon

#### source {array}

>**NOTE:** Coming soon

#### controls {boolean}

>**NOTE:** Coming soon

#### loop {boolean}

>**NOTE:** Coming soon

#### muted {boolean}

>**NOTE:** Coming soon

#### posterUrl {string}

>**NOTE:** Coming soon

#### preload {boolean}

>**NOTE:** Coming soon

#### width {number/string}

>**NOTE:** Coming soon

#### height {number/string}

>**NOTE:** Coming soon

#### not_supported_message {string}

>**NOTE:** Coming soon

#### style {string/object}

>**NOTE:** Coming soon

### Api

>**NOTE:** Coming soon

## Stats

[![NPM](https://nodei.co/npm-dl/react.video.png?months=1)](https://nodei.co/npm/react.video/)

[![NPM](https://nodei.co/npm-dl/react.video.png?downloads=true)](https://nodei.co/npm/react.video/)

## License

The MIT License (MIT)

Copyright (c) 2016 React-Components-Organization

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

