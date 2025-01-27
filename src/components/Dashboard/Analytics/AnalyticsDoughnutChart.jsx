"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { DoughnutChartContainer } from "./AnalyticsDoughnutChartElements";
import { displayMonths,allOptions as newOptions, allDatasets as newDatasets } from "./AnalyticsUtils";
import useAnalyticsChartCustomHook from "./useAnalyticsChartCustomHook";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function AnalyticsDoughnutChart() {
    const [chartData, chartOptions] = useAnalyticsChartCustomHook({
        displayMonths: displayMonths(0),
        newDatasets: newDatasets.slice(1, 2),
        newOptions: newOptions.slice(-1),
    });

    return (
        <DoughnutChartContainer>
            <Pie options={chartOptions} data={chartData} />
        </DoughnutChartContainer>
    );
}
