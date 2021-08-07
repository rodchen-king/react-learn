/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-11-19 22:42:01
 * @LastEditTime: 2021-08-07 16:14:02
 * @LastEditors: rodchen
 */
import React, {useState, useRef, useEffect} from 'react'
import { BaseTable, useTablePipeline, features } from 'ali-react-table';
import * as antd from 'antd'
import { Input, Button } from 'antd';
import {
  SettingOutlined,
} from '@ant-design/icons';

import ReactDOM from 'react-dom'


export default () => {
  const [dataSource, setDataSource] = useState([
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
    { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
    { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
    { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
    { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },
  ])

  let data = []
  const enterHandle = (tag, rowIndex, editNumber) => {
    var a = document.querySelectorAll('table')[1];
    var b = a.querySelector(`[data-rowindex='${rowIndex + 1}']`)
    if (b) {
      let tempDataSource = Object.assign([], dataSource)
      tempDataSource[rowIndex + 1][editNumber] = 1;
      pipeline.setState({dataSource: tempDataSource})
      setTimeout(() => {
        var c = b.querySelector(tag)
        c && c.focus();
      }, 0)
    }
  }

  const handlePaste = (event, rowIndex) => {
    let mapping = {
      '0': 'prov',
      '1': 'confirmed',
      '2': 'cured',
      '3': 'dead',
      '4': 't',
    }

    let tempDataSource = Object.assign([], dataSource)
    var text = event.clipboardData.getData('Text')
    let contentArray = text.split('\n');
    let textArrar = [];

    for (let index = 0; index < contentArray.length; index++) {
      let currentLineContent = contentArray[index];
      currentLineContent.split('\t').forEach((value, j, array) => {
        tempDataSource[rowIndex + index][mapping[j]] = value
      })
    }

    setTimeout(() => {
      pipeline.setState({dataSource: tempDataSource})
    }, 0);
    

    event.preventDefault();
    return false;
  }

  const Cell = ({record, value, rowIndex, queryFlag, editNumber, callBack, name}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showEdit, SetShowEdit] = useState(record[editNumber]);
    const inputEl = useRef(null);

    useEffect(() => {
      if (showEdit) {
        inputEl.current.focus();
      }
    }, [showEdit])
  
    return (
      <>{showEdit 
        ? <Input onMouseOut={(event) => { event.target.blur()}} ref={inputEl} onBlur={() => {
            SetShowEdit(0);
            let tempDataSource = Object.assign([], dataSource)
            tempDataSource[rowIndex][editNumber] = 0;
            pipeline.setState({dataSource: tempDataSource})

        }} onPaste={(event) => {handlePaste(event, rowIndex)}} name={name} onChange={(e) => {
          record[name] = e.target.value;
          value = record[name];
          let tempDataSource = Object.assign([], dataSource)
          // eslint-disable-next-line no-unused-expressions
          callBack & callBack(tempDataSource, value)
          tempDataSource[rowIndex][editNumber] = 1;
          pipeline.setState({dataSource: tempDataSource})
        }} onPressEnter={() => {enterHandle(queryFlag, rowIndex, editNumber)}}   style={{width: '100%', height: '100%'}} value={value} />
      : <div onClick={() => {
        debugger
          SetShowEdit(1); 
          let tempDataSource = Object.assign([], dataSource)
          tempDataSource[rowIndex][editNumber] = 1;
          pipeline.setState({dataSource: tempDataSource})
        }} style={{'textIndent': '20px', height: '100%', 'lineHeight': '47px'}}>{value}</div> }
        
      </>
    )
  }
  
  const columns = [
    { code: 'null', name: '', width: 10, align: 'center',  render: (value: any, record: any, rowIndex: number) => {
      return <SettingOutlined style={{cursor: 'pointer'}} />
    } },
    { code: 'prov', name: '省份', width: 150,  render: (value: any, record: any, rowIndex: number) => {
      return <Cell name="prov" key={rowIndex + 'prov'} record={record} value={value} rowIndex={rowIndex} queryFlag="[name='prov']" editNumber="firstCanEdit" callBack={(tempDataSource, value) => {
        tempDataSource[rowIndex].confirmed = value * 2;
      }} />
      
    } },
    { code: 'confirmed', name: '确诊', width: 100, render: (value: any, record: any, rowIndex: number) => {
      return <Cell name="confirmed" key={rowIndex + 'confirmed'} record={record} value={value} rowIndex={rowIndex} queryFlag="[name='confirmed']" editNumber="SecondCanEdit" callBack={(tempDataSource, value) => {
        tempDataSource[rowIndex].prov = value / 2;
      }} />
    }},
    { code: 'cured', name: '治愈', width: 100,    render: (value: any, record: any, rowIndex: number) => {
      return <Input name='cured' onPressEnter={() => {enterHandle("[name='cured']", rowIndex)}} style={{width: '100%', height: '100%'}} value={value}  />
    } },
    { code: 'dead', name: '死亡', width: 100,    render: (value: any, record: any, rowIndex: number) => {
      return <Input name='dead' onPressEnter={() => {enterHandle("[name='dead']", rowIndex)}} style={{width: '100%', height: '100%'}} value={value}  />
    } },
    { code: 't', name: '最后更新时间', width: 180 ,    render: (value: any, record: any, rowIndex: number) => {
      return <Input name='t' onPressEnter={() => {enterHandle("[name='t']", rowIndex)}} style={{width: '100%', height: '100%'}} value={value}  />
    }},
  ]
  

  const pipeline = useTablePipeline({ components: antd })
    .input({ dataSource: dataSource, columns: columns })
    .primaryKey('id') // 每一行数据由 id 字段唯一标记
    // .use(
    //   features.multiSelect({
    //     highlightRowWhenSelected: true,
    //     defaultValue: ['1', '2'],
    //     defaultLastKey: '1',
    //     checkboxPlacement: 'start',
    //     checkboxColumn: { lock: true },
    //     clickArea: 'cell',
    //   }),
    // )

  const columns1 = pipeline.getColumns()
  const columns2 = columns1.map((col) => ({ 
    ...col, 
    lock: false,
  }))
  pipeline.columns(columns2)

  // 自定义数据处理逻辑2: 重复 dataSource
  // pipeline.mapDataSource((arr) => arr.flatMap((d) => [d, { ...d, id: d.id + '_copy' }]))

  // 自定义数据处理逻辑3: 红绿相间的背景色
  pipeline.appendRowPropsGetter((row, rowIndex) => {
    const color = rowIndex % 2 === 0 ? 'rgba(253, 32, 32, 0.32)' : 'rgba(128, 243, 87, 0.32)'
    return {
      style: { '--cell-padding': 0 },
    }
  })

  return (
    <>
      <Button onClick={() => {
        console.log(pipeline.getDataSource())
      }}>提交数据</Button>
      <BaseTable {...pipeline.getProps()} />
    </>
  )
}