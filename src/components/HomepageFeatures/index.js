import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Increases the transparency when monitising projects, hobby and idea',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Quickly and efficiently deploy transparent and self-executing contracts, 
        by generating automated smart contracts as development standard solutions. 
        This secures the rights of contributors to the project using Yumpie Protocol.
      </>
    ),
  },
  {
    title: 'Joint control over the shared projects and information',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Simplify partnership and develop a successful product. 
        Communicate, exchange information, and coordinate work with engineers, 
        designers, customers, and suppliers in your own unique ecosystem.
      </>
    ),
  },
  {
    title: 'Built for complex collaborations and lifecycle operations',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Take control of the lifecycle of your businesses and projects 
        with real-world industry-leading digital infrastructure. 
        Each partnership begins with the evaluation and selection of the best collaborators. 
        Yumpie technology simpliies the process of partner selection, agreement formation, 
        and projects execution. Validate each other using the power of blockchain.
      </>
    ),
  },
  {
    title: 'Maximum security that ensures total privacy',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        End-to-end state-of-the-art encryption means more secure meetings and classrooms. 
        All of your communications is secure. End to end state of the art encryption 
        means your participants are exactly that. Your calls.
      </>
    ),
  },
  {
    title: 'Live streaming, chat, file sharing and more',
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <>
        Share your screen, application window, present your documents, slides and more. 
        Simple collaborative whiteboard to draw and explain your concepts to the other participants in the meeting. 
        File Sharing. Share any types of files to all participants in the meeting, in total security, 
        thanks to Datagram Transport Layer Security (DTLS).
      </>
    ),
  },
  {
    title: 'Unlimited number of conference rooms without call time limitation',
    Svg: require('@site/static/img/6.svg').default,
    description: (
      <>
        Share your screen, application window, present your documents, slides and more. 
        Having the webcam on, allows participants to make a deeper connection with you. 
        Up to 4k resolution. Chat with others in meeting, either public chat or private, 
        save the meeting messages. Integrated emoji picker to show your feeling.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
