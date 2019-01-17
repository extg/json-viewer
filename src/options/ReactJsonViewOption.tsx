import * as React from 'react';
import ReactSelect from 'react-select';
import ReactJson from 'react-json-view';

import exampleJson from './exampleJson';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'monokai',
      collapsed: false,
      collapseStringsAfter: 15,
      onAdd: true,
      onEdit: true,
      onDelete: true,
      displayObjectSize: true,
      enableClipboard: true,
      indentWidth: 4,
      displayDataTypes: true,
      iconStyle: 'triangle',
    };
  }

  componentDidUpdate = () => this.props.saveComponentProps(this.state);

  render() {
    const {
      collapseStringsAfter,
      displayObjectSize,
      enableClipboard,
      theme,
      iconStyle,
      collapsed,
      indentWidth,
      displayDataTypes,
    } = this.state;

    const style = {
      padding: '10px',
      borderRadius: '3px',
      margin: '10px 0px',
    };

    return (
      <div>
        <ReactJson
          name={false}
          collapsed={collapsed}
          style={style}
          theme={theme}
          src={exampleJson}
          collapseStringsAfterLength={collapseStringsAfter}
          displayObjectSize={displayObjectSize}
          enableClipboard={enableClipboard}
          indentWidth={indentWidth}
          displayDataTypes={displayDataTypes}
          iconStyle={iconStyle}
        />

        <div>
          <div>
            <div>Theme:</div>
            <ReactSelect
              name="theme-select"
              value={theme}
              options={[
                { value: 'apathy', label: 'apathy' },
                { value: 'apathy:inverted', label: 'apathy:inverted' },
                { value: 'ashes', label: 'ashes' },
                { value: 'bespin', label: 'bespin' },
                { value: 'brewer', label: 'brewer' },
                { value: 'bright:inverted', label: 'bright:inverted' },
                { value: 'bright', label: 'bright' },
                { value: 'chalk', label: 'chalk' },
                { value: 'codeschool', label: 'codeschool' },
                { value: 'colors', label: 'colors' },
                { value: 'eighties', label: 'eighties' },
                { value: 'embers', label: 'embers' },
                { value: 'flat', label: 'flat' },
                { value: 'google', label: 'google' },
                { value: 'grayscale', label: 'grayscale' },
                {
                  value: 'grayscale:inverted',
                  label: 'grayscale:inverted',
                },
                { value: 'greenscreen', label: 'greenscreen' },
                { value: 'harmonic', label: 'harmonic' },
                { value: 'hopscotch', label: 'hopscotch' },
                { value: 'isotope', label: 'isotope' },
                { value: 'marrakesh', label: 'marrakesh' },
                { value: 'mocha', label: 'mocha' },
                { value: 'monokai', label: 'monokai' },
                { value: 'ocean', label: 'ocean' },
                { value: 'paraiso', label: 'paraiso' },
                { value: 'pop', label: 'pop' },
                { value: 'railscasts', label: 'railscasts' },
                { value: 'rjv-default', label: 'rjv-default' },
                { value: 'shapeshifter', label: 'shapeshifter' },
                {
                  value: 'shapeshifter:inverted',
                  label: 'shapeshifter:inverted',
                },
                { value: 'solarized', label: 'solarized' },
                { value: 'summerfruit', label: 'summerfruit' },
                {
                  value: 'summerfruit:inverted',
                  label: 'summerfruit:inverted',
                },
                { value: 'threezerotwofour', label: 'threezerotwofour' },
                { value: 'tomorrow', label: 'tomorrow' },
                { value: 'tube', label: 'tube' },
                { value: 'twilight', label: 'twilight' },
              ]}
              onChange={val => this.setState(prevState => ({ ...prevState, theme: val.value }))}
            />
          </div>
          <div>
            <div>Icon Style:</div>
            <ReactSelect
              name="icon-style"
              value={iconStyle}
              options={[
                { value: 'circle', label: 'circle' },
                { value: 'square', label: 'square' },
                { value: 'triangle', label: 'triangle' },
              ]}
              onChange={val =>
                this.setState(prevState => ({
                  ...prevState,
                  iconStyle: val.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
