//mywork
class CustomTooltip {
  init(params) {

    const tooltipDiv = (this.tooltipDiv = document.createElement("div"));
    if (params.data.EXAM_CD != "MEDI") {
      tooltipDiv.style.dispaly = 'none';
    }
    else {
      const color = params.color || "white";
      //const data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
      tooltipDiv.classList.add("custom-tooltip");
      tooltipDiv.style["background-color"] = color;
      tooltipDiv.innerHTML = `<p><span class"name">${params.data.BASE_LOW_VAL}</span></p>`;
    }
  }
  getGui() {

    return this.tooltipDiv;
  }
}
var grp_EXAM_CD = [];
var dgroup;
var myChart;
var chartIdxArray = [2,1,0];
var lineColor = [
  '#4dc9f6',
  '#f67019',
  '#f53794','#8549ba', '#58595b', '#00a950', '#166a8f','#acc236', '#537bc4',
];
const upLimitColor = "rgb(243,200,218)";
const downLimitColor = "rgb(190,216,241)";
const gridItemColor = "rgb(200,229,217)";
var selectedColumn;
const selectColor = "#b7e4ff";
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
      scales: {
        yAxes: [
          {
            display: false,
          },
        ],
      },
    },
    scales: {
      x: {
        grid: {
          lineWidth: 58,
          color:"rgb(245,245,247)",
        },
        ticks: {
          display: false,
        },
      },
      y0: {
        title: {
          display: true,
          text: "    ",
        },
        grid: {
          display: false,
          borderColor: "rgb(245,245,247)",
        },
        ticks: {
          display: false,
        },
      },
      y1: {
        display: false,
      },
      y2: {
        display: false,
      },
      y3: {
        display: false,
      },
      y4: {
        display: false,
      },
    },
    elements: {
      point: {
        hoverRadius: 10,
      },
    },
  },
};
// grid option ??????
const gridOptions = {
  columnDefs: [],
  rowData: [],
  defaultColDef: {
    editable: false,
    resizable: false,
    sortable: false,
    wrapText: true,
    width: 60,
    autoHeight: true,
    /*enableBrowserTooltip: true,*/
    tooltipComponent: CustomTooltip,
  },
  // components: {
  //   customTooltip: CustomTooltip,
  // },
  tooltipShowDelay: 0,
  tooltipHideDealy: 2000,
  //tooltipMouseTrack: true,
  rowSelection: "single",
  onCellClicked: function (event) {
    /* ?????? ????????? ??? */

    // ????????? ?????? cell ?????? 
    if (event.column.colId == "FLWS_CLAU_NM" && event.data.EXAM_CD == "MEDI") {
      const mdDiv = document.querySelector("#mediAlert");
      mdDiv.style.display = "";
      mdDiv.innerHTML =
        event.data.BASE_UPLMT_VAL +
        "<span onclick='fncloseMdiAlert();' style='margin-left:20px;cursor:pointer'>??????(click)</span>";
      return;
    }
    
    // Activate 
    if (event.column.colId != "FLWS_CLAU_NM") {
      if (event.column.instanceId > 3) {
        myChart.config.options.scales.x.grid.color = (x) => {
          if (x.index == event.column.instanceId - 4) return selectColor;
          else return "rgb(245,245,247)";
        };
      }
      // ?????? ????????? ????????? 
      if(myChart.data.datasets.findIndex(x => x.label == event.data.EXAM_CD) >= 0)
        activateChart(event.data.FLWS_CLAU_NM, event.column.instanceId, event.data.EXAM_CD);
    }

 
    // ?????? ????????? 
    if (event.column.colId == "FLWS_CLAU_NM") {
      if (myChart.data.datasets.length < 5 && myChart.data.datasets.findIndex((x) => x.label == event.data.EXAM_CD) < 0) {
        addChart(event.data.FLWS_CLAU_NM, event.data.EXAM_CD, event.data);
      }
      else if (myChart.data.datasets.findIndex((x) => x.label == event.data.EXAM_CD) >= 0) {
        removeData(event.data.EXAM_CD);
      }
      else {
        alert("3????????? ???????????????.");

      }
    }
    // myChart.data.datasets.push(newDataset3);
    
    myChart.update();
    /* ????????? ????????? cell ?????? ?????? ?????? color ?????? */
    var cols = ["FLWS_CLAU_NM"];
    // ????????? ????????? ??????
    if (selectedColumn) cols.push(selectedColumn.field);
    // ????????????.
    selectedColumn = event.column.colDef;
    cols.push(selectedColumn.field);

    gridOptions.api.refreshCells({
      force: true,
      columns: cols,
    });
        
  },
};

function createGrid(gridID) {
  // ?????? ?????????
  var columns = getColumDefs();
  gridOptions.columnDefs = columns;

  // ?????? ????????? ?????? ???????????? ???????????? ???????????????.
  var gridDiv = document.querySelector(gridID);

  var divGrid = document.querySelector("#divmyGrid");

  divGrid.style.width = (gridOptions.columnDefs.length-1)* 60 +  "px";

  let grid = new agGrid.Grid(gridDiv, gridOptions);

  // console.log(colums)
  // Rows ?????????.
  gridOptions.api.setRowData(getRowData(gridOptions));
}

function createChart(chartID, columens, dataset) {
  // scale ????????? ?????? ??????.
  Chart.register(ChartDataLabels);
  var chartDiv = document.querySelector(chartID);
  const container = document.querySelector("#chartContainer");

  container.style.width = gridOptions.columnDefs.length * 60 - 160 + "px";
  chartDiv.width = gridOptions.columnDefs.length * 60 - 260;
  //    columnDefs.forEach(x=>chartData.push(Utils.rand(/100, 100)));
  //    var labels=[];
  //    columnDefs.forEach(x=>labels.push(x.field) );
  // chartDiv.style.backgroundColor = 'gray';
  myChart = new Chart(chartDiv, chartConfig);

  addChart("WBC", "AC0089");
  addChart("Hb", "AC0091");
}

// ??????
function getColumDefs() {
  var colums = [];
  // json ??????????????? ????????? ????????? ????????? ?????? ?????????.
  // ????????? ????????? ?????????.

  // ????????? ??????
  var dtimes = [];
  // fsData.sort(function (a, b) {
  //   if (a.DGI_RCEP_DT === b.DGI_RCEP_DT) return 0;
  //   return a.DGI_RCEP_DT > b.DGI_RCEP_DT ? 1 : -1;
  // });
  fsData.forEach((x) => {
    if (dtimes.indexOf(x.DGI_RCEP_DT) < 0) dtimes.push(x.DGI_RCEP_DT);
  });

  fsMedi.forEach((x) => {
    if (dtimes.indexOf(x.ORDR_DIRECT_DT) < 0) dtimes.push(x.ORDR_DIRECT_DT);
  });

  dtimes.sort();

  //
  // fsMedi.sort(function (a, b) {
  //   if (a.ORDR_DIRECT_DT === b.ORDR_DIRECT_DT) return 0;
  //   return a.ORDR_DIRECT_DT > b.ORDR_DIRECT_DT ? 1 : -1;
  // });

  // ????????? // ????????????
  colums.push({
    headerName: "?????????",
    field: "FLWS_CLAU_NM",
    width: 140,
    cellStyle: (params) => {
      if (myChart && myChart.data.datasets.length > 0) {
        
        const inx = myChart.data.datasets.findIndex(x => x.label == params.data.EXAM_CD);
        if ( inx>= 0) {
          return {
            textAlign: "center",
            backgroundColor: myChart.data.datasets[inx].borderColor,
          };
        }
      }
      return {
        backgroundColor: "transparent",
      };
    },
  });
  colums.push({
    headerName: "EXAM_CD",
    field: "EXAM_CD",
    width: 0,
    hide: "true",
  });
  colums.push({
    headerName: "low",
    field: "BASE_LOW_VAL",
    width: 0,
    hide: "true",
  });
  colums.push({
    headerName: "up",
    field: "BASE_UPLMT_VAL",
    width: 0,
    hide: "true",
  });

  fsData.forEach((x) => {
    if (grp_EXAM_CD.findIndex((cd) => cd.EXAM_CD === x.EXAM_CD) == -1)
      grp_EXAM_CD.push({ EXAM_CD: x.EXAM_CD, FLWS_CLAU_NM: x.FLWS_CLAU_NM });
  });

  dtimes.forEach((x) => {
    //console.log(columnDefs.filter((c) => c.headerName === x.DGI_RCEP_DT).length);
    //if (colums.filter((c) => c.field === x).length == 0)
      colums.push({
      headerName: x.replace(/(\d{4})(\d{2})(\d{2})/g, "$1 $2-$3"),
      field: x, //s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
      tooltipComponentParams: { color: "#ececec" },
      tooltipField: x,
        cellStyle: (params) => {
          if (params.colDef === selectedColumn)
          return { backgroundColor: selectColor };
          /* todo ??????,?????? ??? ????????? ???????????????*/

          if (parseInt(params.value)) {
            // ?????????.
            if (
              parseInt(params.data.BASE_LOW_VAL) &&
              params.value < parseInt(params.data.BASE_LOW_VAL)
            ) {
              //mark police cells as red
              return {
                backgroundColor: "rgb(190,216,241)",
                textAlign: "center",
              };
            } else if (
              parseInt(params.data.BASE_UPLMT_VAL) &&
              params.value > parseInt(params.data.BASE_UPLMT_VAL)
            ) {
              //mark police cells as red
              return {
                backgroundColor: "rgb(243,220,218)",
                textAlign: "center",
              };
            }
          }

          return {
            textAlign: "center",
            backgroundColor: "transparent",
          };
        },
      });
  });


  return colums;
}

/* ????????? ????????? ????????? Very Important */
function getRowData() {
  // DB?????? ?????????

  var rows = [];
  // ??????????????? ?????????
  // EXAM_CD ??? group by ?????????.
  dmgroup = d3v5.group(fsMedi, (d) => d.ORDR_CD);
  dgroup = d3v5.group(fsData, (d) => d.EXAM_CD);
  // ?????? ??????
  dmgroup.forEach(function (mdata) {
    var r = {}; //?????? ???
    r["FLWS_CLAU_NM"] = mdata[0].ORDR_CD + "(" + mdata[0].CNTNT_MSR_CD + ")";
    r["EXAM_CD"] = "MEDI";

    let sumOfCNT = 0;
    mdata.forEach(x=>{
      //console.log("Mdata", x.ENTR_DOSAGE, x.CNTNT_MSR_CNVERSN_DOSAGE , x.ORDR_DAYS)
      sumOfCNT=sumOfCNT+(x.ORDR_CNT * x.CNTNT_MSR_CNVERSN_DOSAGE * x.ORDR_DAYS)});

    r["BASE_LOW_VAL"] = 
                        mdata[0].MEDI_INGRE_NM +
                        "<br/>" +
                        mdata[0].ORDR_CD +
                        mdata[0].ENTR_DOSAGE +
                        "  " +
                        mdata[0].CNTNT_MSR_CNVERSN_DOSAGE +
                        mdata[0].CNTNT_MSR_CD +
                        "(" +
                        mdata[0].ENTR_DOSAGE +
                        mdata[0].ORDR_ENTR_MSR_VAL +
                        ")" +
                        mdata[0].DSPN_CNT +
                        "???(" +
                        mdata[0].AOM_MTH_CD +
                        ")*" +
                        mdata[0].ORDR_DAYS +
                        "???";
    let sDate = mdata[0].ORDR_DIRECT_DT.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
    let eDate = mdata[mdata.length-1].ORDR_DIRECT_DT.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3")
   
   r["BASE_UPLMT_VAL"] =
                        "[" + mdata[0].ORDR_CD +  "] ??????????????? "+ sDate +" ~ "
                         + eDate+" (" 
                        + (mdata.length-1 )+ " ??? / "+ getDayDiff(sDate,eDate)+") ??????????????? ??? " + (sumOfCNT/1000).toFixed(3) +"g" ;
  
    for (let index = 4; index < gridOptions.columnDefs.length; ++index) {
      // ????????? ???????????? ???????????? ????????????.
      // ???????????? ?????? ?????? ?????? ?????? ??????.

      let d = mdata.filter(
        (y) => y.ORDR_DIRECT_DT === gridOptions.columnDefs[index].field
      );
      if (d.length > 0) {
        

        r[gridOptions.columnDefs[index].field] =
          d[0].CNTNT_MSR_CNVERSN_DOSAGE * d[0].ORDR_CNT;
       
      } else r[gridOptions.columnDefs[index].field] = "";
      // ?????? ????????? ????????? ????????? ??????.
    }
    rows.push(r);
  });

  dgroup.forEach(function (xdata) {
    var r = {}; //?????? ???
    r["FLWS_CLAU_NM"] = xdata[0].FLWS_CLAU_NM;
    r["EXAM_CD"] = xdata[0].EXAM_CD;
    r["BASE_LOW_VAL"] = xdata[0].BASE_LOW_VAL ? xdata[0].BASE_LOW_VAL : "";
    r["BASE_UPLMT_VAL"] = xdata[0].BASE_UPLMT_VAL ? xdata[0].BASE_UPLMT_VAL : "";

    for (let index = 4; index < gridOptions.columnDefs.length; ++index) {
      // ????????? ???????????? ???????????? ????????????.
      // ???????????? ?????? ?????? ?????? ?????? ??????.

      let d = xdata.filter(
        (y) => y.DGI_RCEP_DT === gridOptions.columnDefs[index].field
      );
      if (d.length > 0)
        r[gridOptions.columnDefs[index].field] = d[0].MARK_RSLT_VAL;
      else r[gridOptions.columnDefs[index].field] = "";
      // ?????? ????????? ????????? ????????? ??????.
    }
    rows.push(r);
  });

  return rows;
}


function addChart(itemName, examCd, data) {
  myChart.data.datasets.splice(myChart.data.datasets.length - 2, 2);
  const examData = dgroup.get(examCd);
  const idx = chartIdxArray.pop();
  const dsColor = lineColor[idx];
  let yaxes = "y" + idx;

  const lbl = examCd;

  if (!data) {
    
    gridOptions.api.forEachNode((rowNode) => {
      if (rowNode.data.EXAM_CD == examCd)
      {
        data = rowNode.data;
      }
    });
  
  }


  //var clone = Object.assign({}, data);
  var {FLWS_CLAU_NM,EXAM_CD,BASE_UPLMT_VAL,BASE_LOW_VAL , ...clone} = data;
  for (i = 0; i < myChart.data.datasets.length; i++) {
    myChart.data.datasets[i].borderWidth = 2;

  }

 
  for (const x in clone) {
    if (clone[x] === "") clone[x] = NaN;
  }

  // ??????????????? ?????? ?????????.
  const newDataset = {
    label: lbl,
    backgroundColor: dsColor,
    borderColor: dsColor,
    borderWidth: 5,
    data: clone,
    spanGaps: true,
    datalabels: {
      display: true,
      color: "black",
      font: {
        size: 9,
        family: "?????? ??????",
      },
      align: "top",
    },

    yAxisID: yaxes,
    // labels: Object.values(event.data),
  };

  myChart.options.scales.yaxes;
  myChart.data.datasets.push(newDataset);
  addItemDiv(examData[0], dsColor);


  var min = isNaN(parseFloat(examData[0].BASE_LOW_VAL)) ? examData[0].MARK_RSLT_VAL : parseFloat(examData[0].BASE_LOW_VAL);
  var max = isNaN(parseFloat(examData[0].BASE_UPLMT_VAL)) ? examData[0].MARK_RSLT_VAL : parseFloat(examData[0].BASE_UPLMT_VAL);
     
  examData.forEach((x) => {
    let v = parseFloat(x.MARK_RSLT_VAL);
    if (v < min) min = v;
    if (v > max) max = v;
  });
      
  if (yaxes == "y0") {
    myChart.options.scales.y0.min = min - 1;
    myChart.options.scales.y0.max = max + 1;
  } else if (yaxes == "y1") {
    myChart.options.scales.y1.min = min - 1;
    myChart.options.scales.y1.max = max + 1;
  } else if (yaxes == "y2") {
    myChart.options.scales.y2.min = min - 1;
    myChart.options.scales.y2.max = max + 1;
  } else if (yaxes == "y3") {
    myChart.options.scales.y3.min = min - 1;
    myChart.options.scales.y3.max = max + 1;
  } else if (yaxes == "y4") {
    myChart.options.scales.y4.min = min - 1;
    myChart.options.scales.y4.max = max + 1;
  }
  // ???, ????????? ????????????.
  myChart.data.datasets.push(
    getLimitDataSet(examData[0].BASE_LOW_VAL, "low", yaxes)
  );
  myChart.data.datasets.push(
    getLimitDataSet(examData[0].BASE_UPLMT_VAL, "up", yaxes)
  );


  myChart.update();

  var cols = ["FLWS_CLAU_NM"];

  gridOptions.api.refreshCells({
    force: true,
    columns: cols,
  });
}
// ????????? ????????? ????????? Activate ??????.
function activateChart(itemName, idx, examCd) {
  // ????????? ????????? x??? ????????? ?????? ?????????.
  let dsIndex = -1;
  for (i = 0; i < myChart.data.datasets.length - 2; i++) {
    myChart.data.datasets[i].borderWidth = 2;
    // dataset border ??? 2??? ??????
    if (myChart.data.datasets[i].label === examCd) dsIndex = i;
  }
 
  if (examCd != null) {
    myChart.data.datasets.splice(myChart.data.datasets.length - 2, 2);
    // up low ?????? ???????????? ?????????...
    const examData = dgroup.get(examCd);
      // ???, ????????? ????????????.
    myChart.data.datasets.push(
      getLimitDataSet(examData[0].BASE_LOW_VAL, "low", myChart.data.datasets[dsIndex].yAxisID)
    );
    myChart.data.datasets.push(
      getLimitDataSet(examData[0].BASE_UPLMT_VAL, "up", myChart.data.datasets[dsIndex].yAxisID)
    );
  }
  // ??????????????? 5 ?????????
  if (dsIndex >= 0) {
    myChart.data.datasets[dsIndex].borderWidth = 5;
  }

  // ?????? cell ??? ????????? Active
  if (dsIndex >= 0 && idx > 3) {
    var activElements = [];
    activElements.push({ datasetIndex: dsIndex, index: idx - 4 });
    myChart.setActiveElements(activElements);
  }
  myChart.update();
}

// ?????? ?????? ?????? ??? ?????????
function addItemDiv(data, color) {
  // ?????? ??? ???????????? ?????????
  // div ?????? ??????
  // if (event.colDef.field == "FLWS_CLAU_NM") {
  var ul = document.querySelector("#itemul");

  const li = document.createElement("li");
  const li2 = document.createElement("li");
  // function ??????
  li.onclick = function () {
    // Activate ?????? ..........................................
    activateChart(data.FLWS_CLAU_NM, 0, data.EXAM_CD);
  };
  li.append(data.FLWS_CLAU_NM);
  li.style.backgroundColor = color;
  li.style.cursor = "pointer";
  li.setAttribute("value", data.EXAM_CD);
  li2.setAttribute("value", data.EXAM_CD);
  li2.innerHTML = `<div style='float:left'>${
    data.BASE_LOW_VAL == null ? "" : data.BASE_LOW_VAL
  }</div><div style='float:right'>${data.BASE_UPLMT_VAL}</div>`;
  ul.appendChild(li);
  ul.appendChild(li2);
}

function getLimitDataSet(val, lvl, yaxes) {
  var r = {}; //?????? ???
  var color = lvl === "low" ? "blue" : "red";

  for (let index = 4; index < gridOptions.columnDefs.length; ++index) {
    // ????????? ???????????? ???????????? ????????????.
    // ???????????? ?????? ?????? ?????? ?????? ??????.
    //let d = xdata.filter((y) => y.DGI_RCEP_DT === gridOptions.columnDefs[index].field);

    // ??????????????? ?????????.
    // ???????????? ????????? ??? ???????????? ?????????.
    if (index == 4 || index == gridOptions.columnDefs.length - 1)
      r[gridOptions.columnDefs[index].field] = val;
    else r[gridOptions.columnDefs[index].field] = NaN;
    // ?????? ????????? ????????? ????????? ??????.
  }

  const ds = {
    // label: lb + "low",
    backgroundColor: "rgba(204, 204, 204,0.3)",
    borderColor: color,
    data: r,
    borderWidth: 0.6,
    // borderDash: [5, 5],
    spanGaps: true,
    datalabels: {
      display: true,
      align: "left",
      offset: 2,
      color: color,
    },
    fill: lvl == "up" ? "-1" : "",
    pointRadius: 0,
    yAxisID: yaxes,
    // labels: Object.values(event.data),
  };

  // y ?????? min max ??? ??? ?????? ?????????.

  return ds;
}

//
function removeData(examCd) {
  // ?????? ???, ?????? ?????? ?????????.
  // ?????? ????????? ??? ????????? ????????? ???,?????? ??? ????????? ????????????. ????????? index +2
  myChart.data.datasets.splice(myChart.data.datasets.length - 2, 2);
  let idx = myChart.data.datasets.findIndex((x) => x.label == examCd);

  chartIdxArray.unshift(lineColor.findIndex(x=>x == myChart.data.datasets[idx].borderColor));
  // ?????? idx ??? ????????? ?????? ?????????.
  myChart.data.datasets.splice(idx, 1);

  if (myChart.data.datasets.length > 0) {
    const ds = myChart.data.datasets[myChart.data.datasets.length - 1];
    const data = dgroup.get(ds.label);
    // const lowval = myChart.data.datasets.
    // ????????? ??????????????? ???, ?????? ??? ????????? ?????? ??????.
    myChart.data.datasets.push(getLimitDataSet(data[0].BASE_LOW_VAL, "blue",ds.yAxisID));
    myChart.data.datasets.push(getLimitDataSet(data[0].BASE_UPLMT_VAL, "red",ds.yAxisID));
  }

  myChart.update();

  const ul = document.querySelector("#itemul");
  $("#itemul li").each(function (i, li) {
    if (li.getAttribute("value") == examCd) ul.removeChild(li);
  });

  gridOptions.api.refreshCells({
    force: true,
    columns: ["FLWS_CLAU_NM"],
  });

 
}


function clearDataset() {
  myChart.data.datasets = [];
  myChart.update();

  var ul = document.querySelector("#itemul");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

  chartIdxArray = [2, 1, 0];
  gridOptions.api.refreshCells({
    force: true,
    columns: ["FLWS_CLAU_NM"],
  });
}

function fncloseMdiAlert() {
  const d = document.querySelector("#mediAlert");
  d.innerHTML = "";
  d.style.display = "none";
}

function getDayDiff(sdate, edate){
  
  var sd = new Date(sdate);
  var ed = new Date(edate);
  var elapsed  = ed.getTime() - sd.getTime();
  var elapsedDay = elapsed / 1000/60/60/24; // ???????????? ?????? ??????
 
  
  var year;
  var month;
  var day;
  
  if(elapsedDay < 30) {
    day = elapsedDay;
    return (day + '???');
  } else if (elapsedDay < 365) {
    month = Math.floor(elapsedDay/30);
    day   = elapsedDay - (month * 30);
    return (month + '?????? ' + day + '???');
  } else {
    year  = Math.floor(elapsedDay/365);
    month = Math.floor((elapsedDay-(year*365))/30) 
    day   = elapsedDay - (year*365) - (month*30);
    return (year + '??? ' + month + '?????? ' + day + '??? ');
  }
}