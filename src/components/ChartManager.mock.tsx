const mock: typeof import('./ChartManager.js') = {
    ChartManager: ({ charts, activeChartIndex }) => {
        const json = JSON.stringify(charts)
        return (
            <div className='mock-chart-manager'>
                {`Charts: ${json}`}
                {`Active chart index: ${activeChartIndex}`}
            </div>
        )
    }
}


export const ChartManager = mock.ChartManager
