import React,{ PureComponent } from "react"
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import {config,convert,dateFormat} from './util';


const FormItem = Form.Item;


class MyForm extends PureComponent {
  renderFormItem = (item, getFieldDecorator) => (
    <FormItem key={item.label} label={item.label}>
      {getFieldDecorator(item.field, config(item))(convert(item))}
    </FormItem>
  );

  handleSubmit = (e) => {
    e && typeof e === 'object' && e.preventDefault();

    const { form, fields } = this.props;

    return new Promise((resolve, reject) => {
      form.validateFields((err, values) => {
        if (err) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('请将信息填写完整');
        }

        resolve(dateFormat(fields, values));
      });
    });
  };

  // 重置操作
  onReset = () => {
    const { form } = this.props;
    form.resetFields();
  };

  render() {
    const {
      fields,
      form,
      mode,
      footer
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form
        onSubmit={this.handleSubmit}
        layout={mode === 'search' ? 'inline' : 'horizontal'}
      >
        {mode !== 'plain' ? (
          fields.map(item => this.renderFormItem(item, getFieldDecorator))
        ) : (
          <Row type="flex" gutter={30}>
            {fields.map((item, index) => (
              <Col
                key={index}
                xs={24}
                sm={item.separate ? 24 : 8}
                xl={item.separate ? 24 : 6}
              >
                {this.renderFormItem(item, getFieldDecorator)}
              </Col>
            ))}
          </Row>
        )}

        {/* 非modal模式下，在form表单中显示按钮 */}
        {footer
          && React.cloneElement(footer, {
            onCancel: this.onReset
          })}
      </Form>
    );
  }
}

MyForm.propTypes = {
  form: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  // mode: PropTypes.string.isRequired,
  footer: PropTypes.object
};

const HocForm = Form.create()(MyForm);

HocForm.propTypes = {
  fields: PropTypes.array.isRequired,
  // mode: PropTypes.string.isRequired,
  footer: PropTypes.object
};

export default HocForm;
