import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software Engineer',
    more: '/about/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hello, my name is Saverio and I'm a software engineer and a passionate
        software developer.
      </>
    ),
  },
  {
    title: 'Digital Garden',
    more: '/notes/',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A collection of unrefined, loosely organized notes that constantly evolves as a personal knowledge base.
      </>
    ),
  },
  {
    title: 'Blog',
    more: '/blog/',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I'm not a writer, but I might write something every now and then.
      </>
    ),
  },
];

function Feature({Svg, title, more, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={more}>
            {title}
          </Link>
        </div>

        <p><br/>{description}</p>
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
