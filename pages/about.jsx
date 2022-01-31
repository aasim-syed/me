

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me (PS: IMMA HUGE OFFICE FAN!)</h3>
      <h3>DOWNLOAD MAH RESUME 👉<a href="https://drive.google.com/file/d/1avq3fGVcUan5Xb5sWlZaUItGmOdlasoP/view?usp=sharing">HERE 🙂</a></h3>
      <iframe src="https://assets.pinterest.com/ext/embed.html?id=603763893805705024" height="547" width="345" frameborder="0" scrolling="no" ></iframe>
      
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
