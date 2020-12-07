import { benefitsData } from "../data/benefitsData"
import benefitSecure from "../images/benefit_secure.svg"
import benefitShortTime from "../images/benefit_short_wait_times.svg"
import benefitRealTime from "../images/benefit_real_time_betting.svg"
import benefitBtcTech from "../images/benefit_btc_tech.svg"

const images = {
  benefitBtcTech,
  benefitShortTime,
  benefitRealTime,
  benefitSecure
}

export const getBenefitsData = (data) => {
    return benefitsData.map(b => {
      // fix this, the page renders twice for no reason
      if (typeof(b.image) == 'string')
        b.image = images[b.image]
      return b
    })
  }