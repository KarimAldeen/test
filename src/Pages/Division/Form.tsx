import { Col, Row } from 'reactstrap'
import React from 'react'
import ValidationField from '../../Components/ValidationField/ValidationField'

const Form = () => {
  return (
    <Row>
      <Col xs="8" sm="8"> {/* This column will take up 8 units on extra small screens and 6 units on small screens */}
        <ValidationField name='الجنس'/>
        <ValidationField name='الاسم الأول *'/>
        <ValidationField name='اسم العائلة'/>
        <div className='TowValidationIteams'>
          <ValidationField name='اسم العائلة'/>
          <ValidationField name='اسم العائلة'  no_label/>
        </div>
        {/* <div className='TowValidationIteams'>
          <ValidationField name='اسم العائلة'/>
          <ValidationField name='اسم العائلة'  no_label/>
        </div>
        <div className='TowValidationIteams'>
          <ValidationField name='اسم العائلة'/>
          <ValidationField name='اسم العائلة'  no_label/>
        </div>
        <div className='TowValidationIteams'>
          <ValidationField name='اسم العائلة'/>
          <ValidationField name='اسم العائلة'  no_label/>
        </div> */}
      </Col>
   
      <Col xs="4" sm="4"> {/* This column will take up 4 units on extra small screens and 6 units on small screens */}
        <ValidationField name='DropFile' type='DropFile' label='الصورة *'/>
        <ValidationField name='DropFile' type='DropFile' label='الوثيقة المدرسية *'/>

      </Col>
    </Row>
  )
}

export default Form
