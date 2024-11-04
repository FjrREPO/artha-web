import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface InterestRateCurveProps {
    currentRate?: number;
    optimalRate?: number;
}

const InterestRateCurve = ({
    currentRate = 38.09,
    optimalRate = 80
}: InterestRateCurveProps) => {
    // Generate data points for the curve
    const generateCurveData = () => {
        const points = [];
        for (let x = 0; x <= 100; x += 5) {
            let y;
            if (x <= 80) {
                y = (x / 800) * x + 2; // Gentle curve until optimal rate
            } else {
                y = ((x - 80) * 1.5) + 12; // Steeper curve after optimal rate
            }
            points.push([x, y]);
        }
        return points;
    };

    const options: ApexOptions = {
        chart: {
            type: 'line',
            height: 350,
            background: '#1a1a1a',
            foreColor: '#fff',
            toolbar: {
                show: false
            }
        },
        colors: ['#ffa500'], // Orange line for Borrow APR
        stroke: {
            curve: 'smooth',
            width: 2
        },
        grid: {
            borderColor: '#333333',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        annotations: {
            xaxis: [
                {
                    x: currentRate,
                    borderColor: '#3366ff',
                    label: {
                        text: `Current ${currentRate}%`,
                        style: {
                            color: '#fff',
                            background: '#3366ff'
                        }
                    }
                },
                {
                    x: optimalRate,
                    borderColor: '#3366ff',
                    label: {
                        text: `Optimal ${optimalRate}%`,
                        style: {
                            color: '#fff',
                            background: '#3366ff'
                        }
                    }
                }
            ]
        },
        xaxis: {
            tickAmount: 5,
            min: 0,
            max: 100,
            labels: {
                formatter: (value) => `${value}%`
            },
            title: {
                text: 'Utilization Rate',
                style: {
                    color: '#fff'
                }
            }
        },
        yaxis: {
            tickAmount: 5,
            min: 0,
            max: 60,
            labels: {
                formatter: (value) => `${value}%`
            }
        },
        tooltip: {
            theme: 'dark',
            x: {
                formatter: (value) => `${value}%`
            },
            y: {
                formatter: (value) => `${value}%`
            }
        }
    };

    const series = [
        {
            name: 'Borrow APR',
            data: generateCurveData()
        }
    ];

    return (
        <div className="p-4 rounded-lg">
            <h2 className="text-blue-500 text-xl mb-4">Interest Rate Curve</h2>
            <div className="mb-4">
                <h3 className="text-white text-2xl font-semibold">
                    Utilization Rate
                </h3>
                <div className="flex items-center space-x-4 text-lg">
                    <span className="text-white">{currentRate}%</span>
                    <div className="h-4 w-1 bg-blue-500"></div>
                </div>
                <div className="flex space-x-4 mt-2">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                        <span className="text-orange-500">Borrow APR</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-blue-500">Utilization Rate</span>
                    </div>
                </div>
            </div>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={250}
            />
        </div>
    );
};

export default InterestRateCurve;