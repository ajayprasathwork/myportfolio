import React from 'react';
import './style.css'
import { Button, Table, Alert, List, Checkbox, Col, Row } from 'antd';
const Fees = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const columns = [
    {
      title: 'Particulars',
      dataIndex: 'Particulars',
      key: 'Particulars',
      render: (text) => <a>{text}</a>,
      width: '90%',

    },
    {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'Amount',
    },


  ];
  const data = [
    {
      key: '1',
      Particulars: 'Special Fee 2023',
      Amount: 6000,

    },
    {
      key: '1',
      Particulars: 'Fine',
      Amount: 600,

    },


  ];
  const history = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <div className='page'>
      <div className='main-box'>
        <h3 className='page-titel'>Fees</h3>
        <div className='stu-details'>
          <p className='stu-name'>Student:<span>Ajay Prasath</span></p>
          <p className='stu-name'>Class:<span>Grade-01-A 2023-24</span></p>
          <p className='stu-name'>Admission No:<span>S1</span></p>

        </div>
        <Table columns={columns} dataSource={data} pagination={false} title={() => <div className='table-header'>
          <p className='tb-titel'>Spacial Fee</p>
          <Alert className='due-date' message="DueDate: 01-04-2023" type="warning" showIcon />

        </div>}
          footer={() => <div className='table-fooder'>
            <div className='table-header'>
              <p className='tb-titel'>Total Amount To Pay</p>
              <p className='total'>6600</p>
            </div>
            <div className='table-header pay-continer'>
              <Checkbox.Group
                style={{
                  width: '100%',
                }}
                onChange={onChange}
              >
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>
                    <Checkbox value="A">A</Checkbox>

              </Checkbox.Group>             
              <Button type="primary">Pay Now</Button>
            </div>
          </div>} />

      </div>
      <div className='side-box'>
        <List
          className='paymenthistory'
          size="small"
          header={<div className='hi-list-header'><p className='titel'>History</p><p className='viewall'>View all</p></div>}
          dataSource={history}
          renderItem={(item) => (
            <List.Item key={item}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item}</a>}
                description={"pone"}

              />
              <div>
                <Alert className='due-date' message="Padid" type="success" showIcon />

              </div>

            </List.Item>
          )}
        />
      </div>

    </div>
  );
};

export default Fees;