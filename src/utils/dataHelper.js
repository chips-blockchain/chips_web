import { benefitsData } from "../data/benefitsData"

export const getBenefitsData = (data) => {
    return benefitsData.map(b => {
      // fix this, the page renders twice for no reason
      if (typeof(b.image) == 'string')
        b.image = data[b.image].childImageSharp.fixed
      return b
    })
  } 