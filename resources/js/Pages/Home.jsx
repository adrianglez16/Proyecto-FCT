// Components
import { Head } from '@inertiajs/react';
import NavigationBar from '../Layouts/NavigationBar';
import Header from './Home/Header';
import CallToAction from './Home/CallToAction';
import HappyUser from './Home/HappyUser';
import Footer from '../Layouts/Footer';


export default function Guest() {


  
  return (
    <>
      <Head title="Home" />
      
      <NavigationBar />
      <Header />
      <HappyUser />
      <CallToAction />
      <Footer />
    </>
  )
}