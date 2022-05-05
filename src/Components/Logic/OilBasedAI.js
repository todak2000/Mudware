/**
 * Calculate the PV at HTHP given the below parameters.
 *
 * @param pressure, @param temperature, @param pv
 */


  export const oilBasedAI = (pressure,temperature,pvi) => {
      let p = parseFloat(pressure)
      let t = parseFloat(temperature)
      let pv = parseFloat(pvi)
      let a = 2231/t
      let b = 0.0000702*p*pv
      let c = 0.0000000000000000134*(p**4)
      let d = 0.164*pv
      let e = 0.00000000164*pv*(p**2)
      let f = 27.2*(Math.tanh(p+(t/p)-19.8))
    
     let x = 27.2 + a + b + c - d - e - f
         return x.toFixed(2)
   };