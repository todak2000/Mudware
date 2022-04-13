/**
 * Calculate the PV at HTHP given the below parameters.
 *
 * @param pressure, @param temperature, @param pv
 */

 const a = -2.83899
 const a1 = 4.13748
 const b = 1.295684
 const b1 = 1.73536
 const c = -2.94264
 const c1 = 0.952825
 const d  =  1.021229
 const d1 = 0.53637
 const e = -0.64837
 const e1 = 2.16567
 const f = 2.912501
 const f1 = 3.65794
 const g = 1.847664
  export const oilBasedAI = (pressure,temperature,pvi) => {
      let p = parseFloat(pressure)
      let t = parseFloat(temperature)
      let pv = parseFloat(pvi)
      let a2 = a*(Math.tanh(1.956926*p - 2.97432*t + 3.489852*pv - a1))
      let b2 = b*(Math.tanh(-0.52078*p + 0.970642*t - 5.47737*pv - b1))
      let c2 = c*(Math.tanh(-2.27456*p + 2.613*t - 0.69898*pv + c1))
      let d2 = d*(Math.tanh(-0.56259*p - 0.96753*t + 1.16666*pv - d1))
      let e2 = e*(Math.tanh(-1.92411*p + 0.34395*t - 1.11091*pv - e1))
      let f2 = f*(Math.tanh(0.560638*p - 3.4836*t + 0.524932*pv - f1))
     let x = a2+b2+c2+d2+e2+f2-g
         return x.toFixed(2)
   };