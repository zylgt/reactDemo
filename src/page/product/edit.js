import React from 'react';
import './edit.css';
import { connect } from 'react-redux'
import {Form,Input,InputNumber,Upload,DatePicker,message,Switch,Button} from 'antd' ;
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

class Edit extends React.Component {
  formRef = React.createRef();
  state = {
    loading: false
  };
  
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFinish = values => {
    console.log(values,values['date'].format('YYYY-MM-DD'));
  }
  render() {
    const layout = {
      labelCol:{span:2},
      wrapperCol:{span:14}
    }
    const tailLayout = {
      wrapperCol: { offset: 8, span: 14 },
    };
    console.log(this.props)
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div id='Edit'>
          <Form {...layout}  ref={this.formRef} onFinish={this.onFinish}>
            <Form.Item label='商品名称' name='name' rules={[{ required : true, message : '请填写商品名称' }]} >
              <Input />
            </Form.Item>
            <Form.Item label='商品型号' name='type' rules={[{ required : true, message : '请填写商品型号' }]} >
              <Input />
            </Form.Item>
            <Form.Item label='商品规格' name='specs' rules={[{ required : true, message : '请填写商品规格' }]} >
              <Input />
            </Form.Item>
            <Form.Item label='商品库存' name='stock' rules={[{ required : true, message : '请填写商品库存' }]} >
              <InputNumber  min={1} />
            </Form.Item>
            <Form.Item label='商品售价' name='money' rules={[{ required : true, message : '请填写商品售价' }]}>
              <InputNumber min={0.1} />
            </Form.Item>
            <Form.Item label='生产日期' name='date' rules={[{ required : true, message : '请选择生产日期' }]} format='YYYY/MM/DD' >
               <DatePicker />
            </Form.Item>
            <Form.Item label='生产批号' name='lot' rules={[{ required : true, message : '请填写商品售价' }]}>
              <Input />
            </Form.Item>
            <Form.Item label='商品主图' name='img' rules={[{ required : true, message : '请上传商品主图' }]}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            </Form.Item>
            <Form.Item label='是否线上展示'>
              <Switch />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" >提交</Button>
              <Button htmlType="button" onClick={this.onReset} >重置</Button>
            </Form.Item>
          </Form>
      </div>
    );
  }
  componentDidMount(){
    // 数据回显
    let dataForm = this.props.dataSource.find(item => item.key === this.props.location.state.id )
    if(dataForm.img){
      this.setState({
        imageUrl:dataForm.img,
        loading:false
      })
    }
    dataForm.date = moment(dataForm.date)
    delete dataForm.img
    this.formRef.current.setFieldsValue(dataForm)
  }
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传 JPG/PNG 格式的图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('上传图片大小不能超过2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

// 把状态映射到props
function mapStateToProps(state) {
  return {
    dataSource: state.dataSource
  }
}

// 把dispatch映射到props
function mapDispatchToProps(dispatch) {
  return {
      del: (key) => dispatch({ type: 'DEL' , data : key})
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Edit);;