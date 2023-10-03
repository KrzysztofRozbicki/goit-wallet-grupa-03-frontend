import wallet from '../../assets/icons/wallet.svg';
import banner from '../../assets/icons/banner.svg';

const HomeTab = () => {
  return (
    <>
      <h1>This is the Quick Buck Devs</h1>
      <p>Below are the test shows of icons</p>
      <img src={wallet} />
      <img src={banner} />
    </>
  );
};

export default HomeTab;
