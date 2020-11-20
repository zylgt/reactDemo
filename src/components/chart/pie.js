import React from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

class Pie extends React.Component{
    getOtion = () => {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问',itemStyle:{color:'#07CBFC'}},
                        {value: 310, name: '邮件营销',itemStyle:{color:'#FBE30B'}},
                        {value: 234, name: '联盟广告',itemStyle:{color:'#FC0754'}},
                        {value: 135, name: '视频广告',itemStyle:{color:'#3C7239'}},
                        {value: 1548, name: '搜索引擎',itemStyle:{color:'#F9A90A'}}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    };
    render(){
        return(
            <ReactEcharts
            option={this.getOtion()}
            
            className='react_for_echarts' />
        )
    }
}

export default Pie