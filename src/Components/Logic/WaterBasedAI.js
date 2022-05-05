/**
 * Calculate the PV at HTHP given the below parameters.
 *
 * @param pressure, @param temperature, @param pv
 */


 export const waterBasedAI = (pressure,temperature,pvi) => {
     let p = parseFloat(pressure)
     let t = parseFloat(temperature)
     let pv = parseFloat(pvi)

     let a = 0.000159*p
     let b = (0.00545*t)**pv

     let c1 = pv**2
     let c2 = 0.388*p
     let c3 = p*b

     let c = (244 - c1)/(131 + c2 + c3 - c1)

     let d1 = pv **3
     let d = (0.00000282*t*d1)


    let x = pv + a + b + c - 1.12 - d
        return x.toFixed(2)
  };
  