import * as React from 'react';
import ReactSelect from 'react-select';

import JsonViewer from '../components/JsonViewer';
import exampleJson from './exampleJson';

export default class extends React.Component {
  state = {
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

  // @ts-ignore
  componentDidUpdate = () => this.props.saveComponentProps(this.state);

  render() {
    const { theme } = this.state as any;

    return (
      <div>
        <JsonViewer src={exampleJson} theme={theme} />

        <div>
          <div>
            <div>Theme:</div>
            <ReactSelect
              name="theme-select"
              value={theme}
              options={[{ value: 'light', label: 'light' }, { value: 'dark', label: 'dark' }]}
              onChange={val => this.setState(prevState => ({ ...prevState, theme: val.value }))}
            />
          </div>
        </div>
      </div>
    );
  }
}
