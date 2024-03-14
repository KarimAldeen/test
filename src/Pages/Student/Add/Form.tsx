import React from 'react'
import { Col, Row } from 'reactstrap'
import CustomFiel from '../../../Components/CustomFields/File'
import ValidationField from '../../../Components/ValidationField/ValidationField'
import SelectAndTime from '../../../Components/CustomFields/SelectAndTime'
import TowFiled from '../../../Components/CustomFields/TowFiled'

const Form = () => {

  return (
    <Row>
      <Col className='ImageCol'>
        <CustomFiel />
      </Col>
      <Col>
        <ValidationField name='name' label='الاسم الأول *' />
          <SelectAndTime/>

          <ValidationField name='name' type="email" label='البريد الإلكتروني *' />

          <ValidationField name='name' type='password' label='كلمة السر *' />
          <TowFiled/>

      </Col>
      <Col>
        <ValidationField name='name' label='اسم العائلة *'/>
        <ValidationField name='name' label='اسم الوالد *'/>

        <ValidationField name='name' label='الهاتف *'/>
        <ValidationField name='name' type='TextArea' label='العنوان *'/>

      </Col>

    </Row>
  )
}

export default Form