import AdsCard from './ads_card'
import hello from '../../assets/YoungManSayingHi.jpg'
import profileSetup from '../../assets/profileSetup.jpg'

function Ads() {
  return (
    <div className='flex flex-row not-sm:flex-col justify-start items-center'>
        <AdsCard name='Welcome to Yardify' describe='Best Marketplace App in Jamaica' timer='' image={hello}></AdsCard>
        <AdsCard name='Reminder' describe='Make sure to Fill out your Profile & Download our App off the App Store - Yardify' time='' image={profileSetup} ></AdsCard>
    </div>
  )
}
export default Ads
