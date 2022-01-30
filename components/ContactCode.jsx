import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'aasim-syed.github.io/me',
    href: 'https://aasim-syed.github.io/me',
  },
  {
    social: 'email',
    link: 'syedaasim133@gmail.com',
    href: 'mailto:syedaasim133@gmail.com',
  },
  {
    social: 'github',
    link: 'aasim-syed',
    href: 'https://github.com/aasim-syed',
  },
  {
    social: 'linkedin',
    link: 'nitinranganath',
    href: 'https://www.linkedin.com/in/syed-aasim/',
  },
  {
    social: 'twitter',
    link: 'nope not here🥱',
    href: '',
  },
  {
    social: 'instagram',
    link: 'nope not here🥱 as well',
    href: '',
  },
  

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
