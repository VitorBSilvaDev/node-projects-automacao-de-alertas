const mockData = {
  'alerts': [
    { 'id': 'A1', 'status': 'critical', 'message': 'High risk on CPU level 2' },
    { 'id': 'A2', 'status': 'warning', 'message': 'High risk on CPU level 3' },
    { 'id': 'A3', 'status': 'stable', 'message': 'Medium risk on CPU level 3' },
    { 'id': 'A4', 'status': 'good', 'message': 'Low risk on CPU level 3' }
  ]
}

const mockdata2 = [
  {id: 'A1', status: 'critical', message: 'High risk on CPU level 2' },
  {id: 'A2', status: 'warning', message: 'High risk on CPU level 3' },
  {id: 'A3', status: 'stable', message: 'Medium risk on CPU level 3' },
  {id: 'A4', status: 'good', message: 'Low risk on CPU level 3' }
]

function getAlerts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Mock: Searching alerts from API');
      resolve(mockData);
    }, 3000);
  })
}

export default getAlerts