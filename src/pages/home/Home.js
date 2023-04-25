import react from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import Profile from '../profile/Profile';

export default function Home(){
    return (
        <div>
            <Topbar/>
            <div className='homeContainer'>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
  
        </div>
    )
}