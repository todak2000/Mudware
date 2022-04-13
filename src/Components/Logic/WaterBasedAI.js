/**
 * Calculate the PV at HTHP given the below parameters.
 *
 * @param pressure, @param temperature, @param pv
 */

const a = 1.5159
const a1 = 0.90182
const b = 1.40186
const b1 = 0.649276
const c = -0.4825
const c1 = 10.9645
const d  =  -0.16084
const d1 = 4.42012
const e = -0.42158
const e1 = 1.3338
const f = 0.5503
const f1 = 18.6612
const g = 0.79397
 export const waterBasedAI = (pressure,temperature,pvi) => {
     let p = parseFloat(pressure)
     let t = parseFloat(temperature)
     let pv = parseFloat(pvi)
     let a2 = a*(Math.tanh(2.05*p - 0.557*t + 2.286*pv + a1))
     let b2 = b*(Math.tanh(-2.43*p + 0.6244*t - 1.828*pv - b1))
     let c2 = c*(Math.tanh(0.403*p + 7.679*t - 7.7893*pv + c1))
     let d2 = d*(Math.tanh(1.039*p + 7.018*t - 11.348*pv + d1))
     let e2 = e*(Math.tanh(-0.705*p + 1.985*t + 1.19159*pv + e1))
     let f2 = f*(Math.tanh(8.489*p + 0.116299*t - 1.42604*pv + f1))
    let x = a2+b2+c2+d2+e2+f2-g
        return x.toFixed(2)
  };
  