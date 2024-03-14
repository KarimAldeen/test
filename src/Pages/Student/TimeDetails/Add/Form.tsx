import React from 'react'
import { Col, Row } from 'reactstrap'
import ValidationField from '../../../../Components/ValidationField/ValidationField'
import { getColorName } from '../../../../Hooks/usePercentage'

const Form = () => {

  return (
    <Row>
      <Col>
        <header className='col_header'>
          <h6 data-color={getColorName(6)}> الغياب </h6>
        </header>
        <main className='col_main'>
      <ValidationField name='name'  label='العدد' type='number' />
        <ValidationField name='name' label='مبرر'  type='number' />
        <ValidationField name='name'  label='غير مبرر' type='number' />
        <div className='TowItemField'>
        <ValidationField name='name' label='المجموع'  type='number' />
        <ValidationField name='name'  label='من أصل :' type='number' />

        </div>
      </main>

      </Col>
      <Col>
        <header className='col_header'>
          <h6 data-color={getColorName(4)}> التأخير </h6>
        </header>
        
        <main className='col_main'>
      <ValidationField name='name'  label='العدد' type='number' />
        <ValidationField name='name' label='مبرر'  type='number' />
        <ValidationField name='name'  label='غير مبرر' type='number' />
        <div className='TowItemField'>
        <ValidationField name='name' label='المجموع'  type='number' />
        <ValidationField name='name'  label='من أصل :' type='number' />

        </div>
      </main>

      </Col>
      <Col>
        <header className='col_header'>
          <h6 data-color={getColorName(2)}> الأذونات </h6>
        </header>
      
      <main className='col_main lastont'>
      <ValidationField name='name'  label='العدد' type='number' />
        <ValidationField name='name' label='مبرر'  type='number' />
        <ValidationField name='name'  label='غير مبرر' type='number' />
        <div className='TowItemField'>
        <ValidationField name='name' label='المجموع'  type='number' />
        <ValidationField name='name'  label='من أصل :' type='number' />

        </div>
      </main>

      </Col>

    </Row>
  )
}

export default Form