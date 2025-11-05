d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/refs/heads/main/harry_potter.csv').then(
    res =>{
        console.log(res);
        console.log(unpack(res, 'title'));//電影名稱
        console.log(unpack(res, 'runtime'));//y軸收益
        drawLineChart(res);
    }
);
    function drawLineChart(res) {
        let trace1 = {
            type: 'bar',    //要做bar圖
            name: 'Harry Potter Movies',
            x: unpack(res, 'title'),
            y: unpack(res, 'runtime'),
            text: unpack(res, 'runtime'), // 在bar上面標數字
            textfont: { 
                size: 14, 
                color: '#FFD700',  // 金色，類似範例圖
            },
            textposition: 'top center',
            marker: {
                color: 'purple',  // 紫色，符合範例圖
            }
        };


        let data = [trace1];

        let layout = {
            margin: { t: 50, b: 250, r: 100, l: 100},
            xaxis: {
                tickangle: -45,   // 設定 x 軸標籤角度
                tickfont: {
                    size: 10,  // 設定字體大小
                },
                title: { text: '' }  // 移除 x 軸標題
            },
            yaxis: {
                title: { text: 'Runtime (minutes)' },
                range: [100, 170]  // 設定 Y 軸範圍，類似範例圖
            },
            title: { 
                text: "Harry Potter Movies Runtime",
                font: { size: 18 }
            },
        };

        Plotly.newPlot('myGraph', data, layout);



    };
    


function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}