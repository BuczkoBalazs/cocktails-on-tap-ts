import 'antd/dist/antd.css';
import { LandingCarousel, LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';

export const LandingAnt = () => {

    return (
    <LandingCarousel
    autoplay={true}
    effect="fade"
    dotPosition='right'
    draggable={true}
    infinite={true}
    pauseOnHover={false}
    pauseOnDotsHover={true}
    >
        <LandingSlide>
            <LandingSlideTitle>Welcome to Cocktails on Draft!</LandingSlideTitle>
            <LandingSlideText>
                Are you thirsty? Have you tried already all pubs and winery nearby? Then it's time to have some adventures with cocktails. We would like to help a bit for beginners why cocktails are so much fun. Browse our page and found you recipes which are easy to do at home. Let the adventure begin!
            </LandingSlideText>
        </LandingSlide>
        <LandingSlide>
            <LandingSlideTitle>Cocktail gallery</LandingSlideTitle>
            <LandingSlideText>
                We have gathered some cocktails which is easy to create but hard to master.
                Check out our collection and learn more.
                Mark up your favourites and it will be save to your account.
            </LandingSlideText>
        </LandingSlide>
        <LandingSlide>
            <LandingSlideTitle>Favourites section</LandingSlideTitle>
            <LandingSlideText>
                Have you checked our cocktails and found some interesting?
                You can reach them here and save yourselves some time.
                Life is too short to spend it on searching when you can make a cocktail instead.
            </LandingSlideText>
        </LandingSlide>
    </LandingCarousel>
    )
};