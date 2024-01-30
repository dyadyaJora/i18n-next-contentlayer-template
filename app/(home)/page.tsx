import Layout from './layout'
import { redirect } from 'next/navigation'
import { fallbackLng } from '../i18n/settings'

const HomePage = () => {
    redirect('/' + fallbackLng)
    return (
        <Layout>
            <p>Redirecting</p>
        </Layout>
    );
};

export default HomePage;


