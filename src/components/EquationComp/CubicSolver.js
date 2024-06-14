import React, { useState } from 'react';

const CubicSolver = () => {
  const [a, setA] = useState('1');
  const [b, setB] = useState('0');
  const [c, setC] = useState('0');
  const [d, setD] = useState('0');
  const [roots, setRoots] = useState([]);

  const solveCubicEquation = () => {

    var aNum = parseFloat(a);
    var bNum = parseFloat(b);
    var cNum = parseFloat(c);
    var dNum = parseFloat(d);


    const discriminant = (18 * aNum * bNum * cNum * dNum) - (4 * Math.pow(bNum, 3) * dNum) + (Math.pow(bNum, 2) * Math.pow(cNum, 2)) - (4 * aNum * Math.pow(cNum, 3)) - (27 * Math.pow(aNum, 2) * Math.pow(dNum, 2));
    
    let rootsArr = [];
    rootsArr.push(discriminant);



  
    if (discriminant > 0) {
      const delta0 = Math.pow(bNum, 2) - 3 * aNum * cNum;
      const delta1 = 2 * Math.pow(bNum, 3) - 9 * aNum * bNum * cNum + 27 * Math.pow(aNum, 2) * dNum;
      const C = Math.cbrt((delta1 + Math.sqrt(delta1 * delta1 - 4 * delta0 * delta0 * delta0)) / 2);
      rootsArr.push(parseFloat(-bNum - C + delta0 / C) / (3 * aNum));
      rootsArr.push(parseFloat(-bNum + delta0 / C - C) / (3 * aNum));
      rootsArr.push(parseFloat(-bNum + delta0 / C + C) / (3 * aNum));
    } else if (discriminant === 0) {
      rootsArr.push(parseFloat(-bNum - Math.pow(2 * aNum, 1 / 3)) / (3 * aNum));
      rootsArr.push(parseFloat(-bNum + Math.pow(2 * aNum, 1 / 3)) / (3 * aNum));
      rootsArr.push(parseFloat(4 * bNum - Math.pow(2 * aNum, 1 / 3)) / (6 * aNum));
    } else {
      const A = Math.pow(((-27 * Math.pow(dNum, 2) + 18 * aNum * bNum * cNum * dNum - 4 * Math.pow(bNum, 3) * dNum - 4 * aNum * Math.pow(cNum, 3) + Math.pow(bNum, 2) * Math.pow(cNum, 2)) / (2 * Math.pow(discriminant, 3 / 2))), 1 / 3);
      const delta = 0.5 * (Math.sqrt(-3 * Math.pow(bNum, 2) + 4 * aNum * cNum) / Math.pow(discriminant, 1 / 2));
      const i = Math.sqrt(-1);
      var y1 = (-(bNum / (4 * aNum))) + i * ((Math.sqrt(3) / 2) * delta + A / (2 * (Math.sqrt(3) / 2)));
      var y2 = (-(bNum / (4 * aNum))) + i * ((-(Math.sqrt(3) / 2)) * delta + A / (2 * (Math.sqrt(3) / 2)));
      var y3 = (-(bNum / (4 * aNum))) + i * (-A / (2 * (Math.sqrt(3) / 2)));
      rootsArr.push(parseFloat(y1), parseFloat(y2),parseFloat(y3));
    }
    setRoots(rootsArr);
    console.log(rootsArr)
   };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Cubic Equations Solver</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <label className="text-lg">a:</label>
          <input type="text" value={a} onChange={(e) => setA(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg">b:</label>
          <input type="text" value={b} onChange={(e) => setB(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg">c:</label>
          <input type="text" value={c} onChange={(e) => setC(e.target.value)} style={{ color: 'black' }} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg">d:</label>
          <input type="text" value={d} onChange={(e) => setD(e.target.value)} style={{ color: 'black' }} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={solveCubicEquation}>Solve</button>
      </div>
      <div className="mt-6">
        {roots.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Roots:</h3>
            <ul>
              {roots.map((root, index) => (
                <li key={index} className="text-lg">{`Root ${index + 1}: ${root.toFixed(5)}`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
function cuberoot(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
}

export default CubicSolver;




