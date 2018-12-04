import React from 'react';
import cn from 'classnames/bind';

import getComputedTypeOrValue, {getType} from './getComputedTypeOrValue';
import css from './Json.module.css';

const cx = cn.bind(css)

const ClosedIcon = () => (
  <span className={css.icon}>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#727272" d="M12 8L0 16V0z"/></svg>
  </span>
)
const OpenIcon = () => (
  <span className={css.icon}>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#727272" d="M8 14L0 2h16z"/></svg>
  </span>
)

const mapTypeToColor = (type) => {
  const map = {
    Object: '#212121',
    Array: '#212121',
    Number: '#1C00CF', // 'rgb(28, 0, 207)',
    String: '#C41A16', // 'rgb(196, 26, 22)',
    Undefined: '#212121',
    Null: '#808080',
    Boolean: 'rgb(13, 34, 170)',
    Function: '#212121'
  };

  return map[type];
};

class Json extends React.Component {
  constructor(props) {
    super(props);
    // раскрываем root ноду (у нее нет indexKey) и закрываем все остальные
    this.state = {...props, isClosed: !!props.indexKey};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.stopPropagation();

    this.setState({isClosed: !this.state.isClosed});
  }


  render() {
    const {indexKey, dataObject, isClosed} = this.state;
    const type = getType(dataObject);
    let typeValue = getComputedTypeOrValue(dataObject, isClosed);
    const className = cx('root', {
      hasToggler: !Object.isSealed(dataObject),
      closed: isClosed,
      // TODO: вынести plainText в отдельный компонент
      plainText: this.props.plainText,
    });

    if (type === 'Object') {
      typeValue = toJson(dataObject)
    }

    if (this.props.plainText) {
      return (
        <div className={className}>
          {JSON.stringify(dataObject, null, 2)}
        </div>
      )
    }

    return (
      <ol className={className}>
        <li className={css.nameAndValue} onClick={this.clickHandler}>
          {isClosed ? <ClosedIcon/> : <OpenIcon/>}

          {/* Не выводим indexKey, если его нет (у rootNode) */}
          {!!indexKey && <span className={css.name}>{indexKey}</span>}
          {!!indexKey && ': '}

          <span className={cx('value', {type})} style={{color: mapTypeToColor(type)}}>{typeValue}</span>
        </li>

        {!isClosed && !Object.isSealed(dataObject) && Object.keys(dataObject).sort(Number).map(key => (
          <Json
            key={key}
            indexKey={key}
            dataObject={dataObject[key]}
          />
        ))}
      </ol>
    );
  }
}

const eq = ': ';
const sep = ', ';

const toJson = obj => (
  <span className={css.toJson}>
    {'{'}
    {!Object.isSealed(obj) && Object.keys(obj).sort(Number).map(key => ([
      <span className={css.name}>{key}</span>,
      eq,
      <span style={{color: mapTypeToColor(getType(obj[key]))}}>{JSON.stringify(obj[key])}</span>,
    ])).reduce((a, b) => [a, sep, b])}
    {'}'}
  </span>
)

export default Json;
