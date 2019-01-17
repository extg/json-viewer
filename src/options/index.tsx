import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { RadioGroup, Radio } from "react-radio-group";

import ReactJsovViewOption from "./ReactJsovViewOption";

const Container = styled.div`
  min-width: 500px;
  max-height: 100vh;
  padding: 16px;

  overflow: scroll;
`;

class SettingsPage extends React.PureComponent<
  {},
  { variant: string; componentProps: object }
> {
  constructor(props) {
    super(props);

    this.state = { variant: "devtools", componentProps: {} };
  }

  handleRadioChange = e => this.setState({ variant: e });

  saveComponentProps = componentProps =>
    this.setState(prevState => ({ ...prevState, componentProps }));

  saveUserSettings = () => chrome.storage.sync.set(this.state);

  render() {
    const { variant } = this.state;

    const settingsComponent = React.cloneElement(
      {
        devtools: <div />,
        reactjson: <ReactJsovViewOption />
      }[variant],
      {
        saveComponentProps: this.saveComponentProps
      }
    );

    return (
      <Container>
        <div>
          <RadioGroup
            name="fruit"
            selectedValue={this.state.variant}
            onChange={this.handleRadioChange}
          >
            <Radio value="devtools" />
            DevTools view
            <Radio value="reactjson" />
            React Json View
          </RadioGroup>
          <button onClick={this.saveUserSettings}>Save settings</button>
        </div>
        {settingsComponent}
      </Container>
    );
  }
}

ReactDOM.render(<SettingsPage />, document.getElementById(
  "root"
) as HTMLElement);
