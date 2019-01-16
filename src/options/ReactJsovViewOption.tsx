import React from "react";
import ReactSelect from "react-select";
import ReactJson from "react-json-view";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      src: this.getExampleJson()
    };
  }

  static defaultProps = {
    theme: "monokai",
    src: null,
    collapsed: false,
    collapseStringsAfter: 15,
    onAdd: true,
    onEdit: true,
    onDelete: true,
    displayObjectSize: true,
    enableClipboard: true,
    indentWidth: 4,
    displayDataTypes: true,
    iconStyle: "triangle"
  };

  render() {
    const {
      collapseStringsAfter,
      onAdd,
      onEdit,
      onDelete,
      displayObjectSize,
      enableClipboard,
      theme,
      iconStyle,
      collapsed,
      indentWidth,
      displayDataTypes
    } = this.props;
    const { src } = this.state;
    const style = {
      padding: "10px",
      borderRadius: "3px",
      margin: "10px 0px"
    };

    return (
      <div className="rjv-demo">
        <ReactJson
          name={false}
          collapsed={collapsed}
          style={style}
          theme={theme}
          src={src}
          collapseStringsAfterLength={collapseStringsAfter}
          displayObjectSize={displayObjectSize}
          enableClipboard={enableClipboard}
          indentWidth={indentWidth}
          displayDataTypes={displayDataTypes}
          iconStyle={iconStyle}
        />

        <div className="rjv-settings">
          <div className="rjv-input">
            <div className="rjv-label">Theme:</div>
            {this.getThemeInput(theme)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Icon Style:</div>
            {this.getIconStyleInput(iconStyle)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Enable Edit:</div>
            {this.getEditInput(onEdit)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Enable Add:</div>
            {this.getAddInput(onAdd)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Enable Delete:</div>
            {this.getDeleteInput(onDelete)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Enable Clipboard:</div>
            {this.getEnableClipboardInput(enableClipboard)}
          </div>
        </div>

        <div className="rjv-settings">
          <div className="rjv-input">
            <div className="rjv-label">Display Data Types:</div>
            {this.getDataTypesInput(displayDataTypes)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Display Object Size:</div>
            {this.getObjectSizeInput(displayObjectSize)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Indent Width:</div>
            {this.getIndentWidthInput(indentWidth)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Collapsed:</div>
            {this.getCollapsedInput(collapsed)}
          </div>
          <div className="rjv-input">
            <div className="rjv-label">Collapse Strings After Length:</div>
            {this.getCollapsedStringsInput(collapseStringsAfter)}
          </div>
        </div>
      </div>
    );
  }

  getIconStyleInput = iconStyle => {
    return (
      <ReactSelect
        name="icon-style"
        value={iconStyle}
        options={[
          { value: "circle", label: "circle" },
          { value: "square", label: "square" },
          { value: "triangle", label: "triangle" }
        ]}
        onChange={val => {
          this.set("iconStyle", val);
        }}
      />
    );
  };

  getThemeInput = theme => {
    return (
      <ReactSelect
        name="theme-select"
        value={theme}
        options={[
          { value: "apathy", label: "apathy" },
          { value: "apathy:inverted", label: "apathy:inverted" },
          { value: "ashes", label: "ashes" },
          { value: "bespin", label: "bespin" },
          { value: "brewer", label: "brewer" },
          { value: "bright:inverted", label: "bright:inverted" },
          { value: "bright", label: "bright" },
          { value: "chalk", label: "chalk" },
          { value: "codeschool", label: "codeschool" },
          { value: "colors", label: "colors" },
          { value: "eighties", label: "eighties" },
          { value: "embers", label: "embers" },
          { value: "flat", label: "flat" },
          { value: "google", label: "google" },
          { value: "grayscale", label: "grayscale" },
          {
            value: "grayscale:inverted",
            label: "grayscale:inverted"
          },
          { value: "greenscreen", label: "greenscreen" },
          { value: "harmonic", label: "harmonic" },
          { value: "hopscotch", label: "hopscotch" },
          { value: "isotope", label: "isotope" },
          { value: "marrakesh", label: "marrakesh" },
          { value: "mocha", label: "mocha" },
          { value: "monokai", label: "monokai" },
          { value: "ocean", label: "ocean" },
          { value: "paraiso", label: "paraiso" },
          { value: "pop", label: "pop" },
          { value: "railscasts", label: "railscasts" },
          { value: "rjv-default", label: "rjv-default" },
          { value: "shapeshifter", label: "shapeshifter" },
          {
            value: "shapeshifter:inverted",
            label: "shapeshifter:inverted"
          },
          { value: "solarized", label: "solarized" },
          { value: "summerfruit", label: "summerfruit" },
          {
            value: "summerfruit:inverted",
            label: "summerfruit:inverted"
          },
          { value: "threezerotwofour", label: "threezerotwofour" },
          { value: "tomorrow", label: "tomorrow" },
          { value: "tube", label: "tube" },
          { value: "twilight", label: "twilight" }
        ]}
        onChange={val => {
          this.set("theme", val);
        }}
      />
    );
  };

  set = (field, value) => {
    let state = {};
    state[field] = value.value;
    this.setState(state);
  };

  getExampleJson = () => {
    return {
      string: "this is a test string",
      integer: 42,
      array: [1, 2, 3, "test", NaN],
      float: 3.14159,
      undefined: undefined,
      object: {
        "first-child": true,
        "second-child": false,
        "last-child": null
      },
      string_number: "1234",
      date: new Date()
    };
  };
}
