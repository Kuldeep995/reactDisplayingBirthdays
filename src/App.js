import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  var d = new Date();
var month = d.getMonth();

var day = d.getDate();
console.log(month, day);
  const [people, setpeople] = useState(data.filter((item)=>{
    return item.birthDate==day&&item.birthMonth==month
  }));
//words.filter(word => word.length > 6); function (num) {
//   return num > 10;
// }
  return <main><section className="container"> <h2>{people.length} Birthdays today</h2><List people={people}></List>
  <button onClick={()=>setpeople([])}>Clear Data</button>
  </section>;</main>
}

export default App;
