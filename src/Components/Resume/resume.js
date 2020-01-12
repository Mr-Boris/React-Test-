import React from 'react';

import './resume.css';
import logo from '../../img/logo.png';
import { connect } from 'react-redux'

import Moment from 'react-moment';

 class Resume extends React.Component {
   render() {
      return (
         <div className='container' >
            <div className='logoDiv'>
               <img src={logo} alt='logo' />
            </div>
            <div className='resumeDiv'>
               <div className='nameBio'> 
                  <div className='avatarDiv'>
                     <img src={this.props.user.avatar_url} alt='' />
                  </div>
                  <div className='nameDiv'>
                     <h1>{this.props.user.name}</h1>
                     <h2>{this.props.user.bio}</h2>
                  </div>
               </div>
            </div>
            <div className='mainGit'>
               <div className='gitProfile'>
                  <div>
                     <h2>GitHub <br /> Profile</h2>
                  </div>
                  <div className='momentDiv'>
                   <h2> On GitHub with <Moment format={'YYYY'}>{this.props.user.created_at}</Moment>, {this.props.user.name} is a developer with>{this.props.user.public_repos} public repositories and {this.props.user.followers} followers.</h2>
                  </div>
               </div>
            </div>
            <div className='mainSite'>
               <div className='site'>
                  <div>
                     <h2> Website </h2>
                  </div>
                  <div className='blogDiv'>
                     <h2>{this.props.user.blog}</h2>
                  </div>
               </div>
            </div>
            <div className='mainLang'>
               <div className='lang'>
                  <div>
                     <h2>Languages</h2>
                  </div>
                  <div className='langDiv'>
                  </div>
               </div>
            </div>
            <div className='mainPopRep'>
               <div className='popRep'>
                  <div>
                     <h2> Popular <br /> Repositories </h2>
                  </div>
                  <div className='popRepDiv'>
                  </div>
               </div>
            </div>
            <div className='mainContri'>
               <div className='contri'>
                  <div>
                     <h2>Contributions</h2>
                  </div>
                  <div className='contriDiv'>
                  </div>
               </div>
            </div>
            <div className='mainOrg'>
               <div className='org'>
                  <div>
                     <h2> Organizations </h2>
                  </div>
                  <div className='orgDiv'>
                  </div>
               </div>
            </div>
            <div className='mainAbout'>
               <div className='about'>
                  <div>
                     <h2> About This <br /> Résumé </h2>
                  </div>
                  <div className='aboutDiv'>
                     <h2> This résumé is generated automatically using public information from the developers GitHub account. The repositories are ordered by popularity based on a very simple popularity heuristic that defines the popularity of a repository by its sum of watchers and forks. Do not hesitate to visit {this.props.user.name}GitHub page for a complete work history.  </h2>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}


const mapStateToProps = state => ({
   user: state.user.currentUser,
});

export default connect(mapStateToProps)(Resume)

