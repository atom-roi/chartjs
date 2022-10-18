

//mywork

var grp_examCd = []; 
var dgroup;
var myChart;
// 임시 변수
var lineColor = ['yellow', 'green', 'blue', 'red', 'green', 'blue', 'red'];
var selectedColumn;
const chartConfig = {
  type: "line",
  data: [],

  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        // position: "top",
        // align: "start",
      },
      title: {
        display: false,
        // text: "Chart.js Line Chart",
        // align: "start",
      },
      datalabels: {
        formatter: function (value, context) {
          //console.log("formaating", value, context);
          var idx = context.dataIndex;
          return context.dataset.data[context.chart.data.labels[idx]];
        },
      },
    },
    scales: {
      x: {
        grid: {
          lineWidth: 58,
        },
        ticks: {
          display:false
        },

        
      },
      y0: {
        title: {
          display: true,
          text: '    ',
        },
        grid: {
          display: false,
          borderColor: 'rgb(245,245,247)'
        },
        ticks: {
          display:false
        },
      },
      y1: {
       display:false,
      },
      y2: {
          display:false
        },
       
    },
    elements: {
      point: {
        hoverRadius:10,
      }
    }
  },
};
// grid option 기본
const gridOptions = {
  columnDefs: [],
  rowData: [],
  rowSelection: 'single',
  enableRangeSelection:true,
  defaultColDef: {
    editable: false,
    resizable: false,
    sortable: false,
    wrapText: true,
    width: 60,
    autoHeight: true,
    
  },
  onCellClicked: function (event) {
    console.log(event);
    
    var cols = [];
    if (selectedColumn)
      cols.push(selectedColumn.field);
    selectedColumn = event.column.colDef;
    cols.push(selectedColumn.field);
    console.log(cols);
    gridOptions.api.refreshCells({ force: true, columns: cols});
    console.log("selectedColumn",selectedColumn);
    const dsColor = lineColor[myChart.data.datasets.length]; //Utils.namedColor(myChart.data.datasets.length);
    const dbase = dgroup.get(event.data.examCd);
    
    // active 항목 없앰.
    myChart.setActiveElements([{}]);
    if(myChart.data.datasets.length>2)
      myChart.data.datasets.splice(myChart.data.datasets.length - 2, 2);
    // 검사 데이터가 안되어 있으면...
    if (!myChart.data.datasets.find((x) => x.label === event.data.flwsClauNm) ) {

      const lb = event.data.flwsClauNm;
      var clone = Object.assign({}, event.data);
      delete clone.flwsClauNm;
      delete clone.examCd;
      for (const x in clone) {
        if (clone[x] === "") clone[x] =NaN;
      }

      
      // 검사값으로 차트 만들기.
      const newDataset = {
        label: lb,
        backgroundColor: dsColor,
        borderColor: dsColor,
        data: clone,
        spanGaps: true,
        datalabels: {
          display: true,
          color: "black",
          font: { size: 9, family: "맑은 고딕" },
          align: "top",
        },
        yAxisID: 'y'+event.rowIndex,
        // labels: Object.values(event.data),
      };




      myChart.data.datasets.push(newDataset);
      addItemDiv(dbase[0],dsColor);
      myChart.update();
    }
   

    // ACTIVATION 차트
    if (myChart.data.datasets.length > 0 && event.column.instanceId > 0) {
      // 차트 active 없앰

      //myChart.data.datasets[0].points[0].radius = 10;
      var activElements = [];
      for (var i = 0; i < myChart.data.datasets.length; i++) {
        activElements.push({ datasetIndex: i, index: event.column.instanceId - 2 });
      }


      myChart.config.options.scales.x.grid.color = (x) => {
        if (x.index == event.column.instanceId - 2)
          return 'rgb(102,204,255)';
        else
          return 'rgb(245,245,247)';
      };

      myChart.setActiveElements(activElements);
      myChart.update();
    }
    // 상, 하한값 그려준다.
    myChart.data.datasets.push(getLimitDataSet(dbase[0].baseLowVal, 'low'));
    myChart.data.datasets.push(getLimitDataSet(dbase[0].baseUplmtVal, 'up'));

    // myChart.data.datasets.push(newDataset3);
    myChart.update();

    // grid cell 전체 에 색 
    

  },
};

function createGrid(gridID) {
  // 컬럼 바인딩 
  var columns = getColumDefs();
  gridOptions.columnDefs = columns;

  // 컬럼 카운트 만큼 그리드의 사이즈를 변경해보자.
  var gridDiv = document.querySelector(gridID);

  var divGrid = document.querySelector("#divmyGrid");
 
  divGrid.style.width = gridOptions.columnDefs.length * 60 + 120 + "px";


  let grid = new agGrid.Grid(gridDiv, gridOptions);
  

  // console.log(colums)
  // Rows 바인딩.
  gridOptions.api.setRowData(getRowData(gridOptions));  

}

function createChart(chartID, columens, dataset) {

  // scale 정보를 추가 한다. 
  Chart.register(ChartDataLabels);
  
  var chartDiv = document.querySelector(chartID);
 
 
  
  chartDiv.width = gridOptions.columnDefs.length * 60 -140;
  //    columnDefs.forEach(x=>chartData.push(Utils.rand(/100, 100)));
  //    var labels=[];
  //    columnDefs.forEach(x=>labels.push(x.field) );
  // chartDiv.style.backgroundColor = 'gray';
  myChart = new Chart(chartDiv, chartConfig);
}

// 컬럼
function getColumDefs() {
  var colums = [];
  // json 데이터에서 날짜를 뽑아서 컬럼을 생성 해준다.
  // 첫번째 컬럼은 검사명.

   
  // 날짜순 정렬
  fsData.sort(function (a, b) {
    if (a.dgiRcepDt === b.dgiRcepDt) return 0;
    return a.dgiRcepDt > b.dgiRcepDt ? 1 : -1;
  });




  // 검사명 // 검사코드
  colums.push({ headerName: "항목명", field: "flwsClauNm", width: 140 });
  colums.push({ headerName: "examCd", field: "examCd", width: 0, hide: "true" });
  fsData.forEach((x) => {
    if (grp_examCd.findIndex((cd) => cd.examCd === x.examCd) == -1)
      grp_examCd.push({ examCd: x.examCd, flwsClauNm: x.flwsClauNm, });
    
    //console.log(columnDefs.filter((c) => c.headerName === x.dgiRcepDt).length);
    if (colums.filter((c) => c.field === x.dgiRcepDt).length == 0)
      colums.push({
        headerName: x.dgiRcepDt.replace(/(\d{4})(\d{2})(\d{2})/g, '$1 $2/$3'),
        field: x.dgiRcepDt,//s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
        cellStyle: params => {

          if (params.colDef === selectedColumn)
            return { backgroundColor: 'pink' }; 
          /* todo 하한,상한 값 체크후 백그라운드*/
          if (params.value > x.baseLowVal) {
            //mark police cells as red
            return { backgroundColor: '#aab6fe', textAlign: 'center' };
          }
          return { textAlign: 'center', backgroundColor:"transparent" };
        },
        
      });
  });

  //columnDefs.push({ headerName: "항목", field: "hangmok" });
  // date.forEach((x) => {
  //   columnDefs.push({ headerName: x, field: x });
  // });

  return colums;
}

/* 그리드 데이터 만들기 Very Important */
function getRowData() {
  // DB에서 가져옴
 
  var rows = [];

  // 로우데이터 만들기
  // examCd 로 group by 해야함.
  dgroup = d3d5.group(fsData, (d) => d.examCd);

  dgroup.forEach(function (xdata) {
    var r = {}; //항목 명
    r["flwsClauNm"] = xdata[0].flwsClauNm;
    r["examCd"] = xdata[0].examCd;

    for (let index = 2; index < gridOptions.columnDefs.length; ++index) {
      // 날짜에 해당하는 데이터를 가져온다.
      // 항목으로 다시 한번 그룹 치고 처리.
      let d = xdata.filter((y) => y.dgiRcepDt === gridOptions.columnDefs[index].field);
      if (d.length > 0) r[gridOptions.columnDefs[index].field] = d[0].examRsltVal;
      else r[gridOptions.columnDefs[index].field] = "";
      // 값이 없을때 항목은 있으나 스킵.
    }
    rows.push(r);
  });

  return rows;
}

// 좌측 항목 표시 및 없애기
function addItemDiv(data, color) {
  // 항목 뺀 데이터만 바인딩
  // div 항목 추가
  // if (event.colDef.field == "flwsClauNm") {
  var ul = document.querySelector("#itemul");
  
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  // function 추가
  li.onclick = function () {
    removeData(data.flwsClauNm);
    ul.removeChild(li);
    ul.removeChild(li2);
  };
  li.append(data.flwsClauNm);
  li.style.backgroundColor = color;  
  li2.innerHTML = `<div style='float:left'>${data.baseLowVal}</div><div style='float:right'>${data.baseUplmtVal}</div>`;
  ul.appendChild(li);
  ul.appendChild(li2);
}

function getLimitDataSet(val, lvl) {

  var r = {}; //항목 명
  var color = lvl === 'low' ? 'blue' : 'red';

  for (let index = 2; index < gridOptions.columnDefs.length; ++index) {
    // 날짜에 해당하는 데이터를 가져온다.
    // 항목으로 다시 한번 그룹 치고 처리.
    //let d = xdata.filter((y) => y.dgiRcepDt === gridOptions.columnDefs[index].field);
    
    // 일직선으로 만든다.
    // 첫번째와 마지막 값 넣어주고 일직선.
    if (index == 2 || index == gridOptions.columnDefs.length-1)
      r[gridOptions.columnDefs[index].field] = val;
    else r[gridOptions.columnDefs[index].field] = NaN;
    // 값이 없을때 항목은 있으나 스킵.
  }
  
  const ds = {
   // label: lb + "low",
    backgroundColor: 'rgba(204, 204, 204,0.3)',
    borderColor: color,
    data: r,
    borderWidth: 0.5,
    borderDash: [5, 5],
    spanGaps: true,
    datalabels: {
      display: true,
      align: 'left',
      offset: 2,
      color:color,
    },
    fill: lvl=='up'?'-1':'',
    pointRadius: 0,
    // labels: Object.values(event.data),
  };
  return ds;
}

//
function removeData(nm) {
  
  // 먼저 상, 하한 값을 지운다.
  // 이미 바인딩 된 차트가 있으면 상,하한 값 차트를 지워준다. 마지막 index +2
  myChart.data.datasets.splice(myChart.data.datasets.length - 2, 2);
  let idx = myChart.data.datasets.findIndex((x) => x.label === nm);

  // 해당 idx 의 데이터 셋을 지운다.
  myChart.data.datasets.splice(idx, 1);
  
  if (myChart.data.datasets.length > 0) {

    const dbase = dgroup.get(grp_examCd[0].examCd);
    // 마지막 데이터셋의 상, 하한 값 차트를 추가 한다.
    myChart.data.datasets.push(getLimitDataSet(dbase[0].baseLowVal, 'blue'));
    myChart.data.datasets.push(getLimitDataSet( dbase[0].baseUplmtVal ,'red'));
  }

  myChart.update();
}
function chagneChartType(t) {
  chartConfig.type = t;
  myChart.update();
}

