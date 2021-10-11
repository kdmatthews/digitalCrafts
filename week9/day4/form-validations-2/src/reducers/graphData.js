const initialState = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#4297A0',
          '#F9BDC0',
          '#B5DFD6',
          '#F8EA8C',
          '#9F5060'
        ],
        hoverBackgroundColor: [
        '#2F5061',
        '#ED7890',
        '#91CABE',
        '#E1C340',
        '#AC203D'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

const GraphData = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default GraphData;