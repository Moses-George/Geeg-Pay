import Context from '@/store/context';
import { ApexOptions } from 'apexcharts';
import { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';

const SparkAreaChart = ({ color }: { color: string | undefined }) => {
    const { darkMode } = useContext(Context);
    const series = [{ name: "dd", data: [2, 24, 19, 33, 15, 90, 20, 50, 80, 67, 9, 44] }];
    const options: ApexOptions = {
        chart: {
            group: 'sparklines',
            type: 'area',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 3,
                left: 2,
                blur: 4,
                opacity: 1,
                color: darkMode ? '#061b16' : "transparent"
            }
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 1
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            //   type: 'datetime',
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        colors: [color]
    };

    return (
        <ReactApexChart series={series} options={options} type="area" width={130} height={50} />
    );
};

export default SparkAreaChart;
