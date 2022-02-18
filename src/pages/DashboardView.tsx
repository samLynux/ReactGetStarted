import React, { useEffect } from "react";
import * as c3 from 'c3';
import Wrapper from "../components/wrapper";
import axios from "axios";


const Dashboard = () => {
    useEffect(() => {
        (
            async () => {
                const chart = c3.generate({
                    bindto: "#chart",
                    data: {
                        x: "x",
                        columns: [
                            ['x'],
                            ['sales']
                        ],
                        types: {
                            Sales: 'bar'
                        }
                    },
                    axis: {
                        x: {
                            type: "timeseries",
                            tick: {
                                format: '%Y-%m-%d'
                            }
                        }
                    }
                });

                const {data} = await axios.get('chart');
                

                chart.load({
                    columns: [
                        ['x', ...data.map((r: any) => r.date)],
                        ['sales', ...data.map((r: any) => r.sum)]
                    ]
                })
            }
        )()
        
    }, [])


    return (
        <Wrapper>
            <h2>Daily Sales</h2>

            <div>
                <div id="chart"/>
            </div>
        </Wrapper>
    )
    
}

export default Dashboard