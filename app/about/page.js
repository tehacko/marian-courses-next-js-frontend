import Image from 'next/image';

import seminarIcon from '@/public/icons/seminar-icon.png';
import webinarIcon from '@/public/icons/webinar-icon.png';
import videoIcon from '@/public/icons/video-lecture-icon.png';
import audioIcon from '@/public/icons/audio-recording-icon.png';
import classes from './page.module.css';
import StopSpinnerOnRender from '@/components/Loading/StopSpinnerOnRender';

const AboutPage = () => {
  return (   
    <StopSpinnerOnRender>    
      <>
        <header className={`page-header ${classes.header}`}>
          <h1>
            Naší vášní je: <span className={classes.highlight}>Vnitřní proměna</span>
          </h1>
          <p>Zůčastněte se našich jedinečných kurzů a staňte se tak součástí nové vlny proměny ve vaší komunitě.</p>
        </header>
        <main className={classes.main}>
          <ul className={classes.perks}>
            <li>
              <p>Přijeďte na seminář probíhající naživo</p>
              <Image src={seminarIcon} alt="A seminar icon." layout="intrinsic"/>
            </li>
            <li>
              <p>Zakuste proměnu z pohodlí domova</p>
              <Image src={webinarIcon} alt="A webinar icon." layout="intrinsic"/>
              
            </li>
            <li>
            <p>Shlédněte přednášku na vámi poptávané téma</p>
              <Image
                src={videoIcon}
                alt="A video lecture icon."
              />
              
            </li>
            <li>
              <p>Pusťte si audio k jiné smysluplné činnosti</p>
              <Image
                src={audioIcon}
                alt="An audio recording icon."
              />
              
            </li>
          </ul>
          <br />
          <br />
          <br />
          <h1>Kurzy Marie</h1>
          <section className={classes.infoSection}>
            <div className={classes.infoColumns}>
              <div className={classes.infoColumn}>
                <ul>
                  <li>Vám umožňují upevnit své dovednosti v oblasti seberozvoje.</li>
                  <li>Vám poskytují znalosti, které můžete okamžitě aplikovat ve svém každodenním životě.</li>
                  <li>Vám pomáhají vytyčit si své osobní cíle a dosáhnout jich.</li>
                </ul>
              </div>
              <div className={classes.infoColumn}>
                <ul>
                  <li>Jsou vedeny zkušenými lektory s bohatými zkušenostmi z oboru.</li>
                  <li>Můžete absolvovat vlastním tempem a tím je jednoduše začlenit do vašeho nabitého rozvrhu.</li>
                  
                  <li>Vám umožňují nalézt nové přátele s podobnými zájmy.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </>
    </StopSpinnerOnRender>
  );
};

export default AboutPage;