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
                     <h2> On GitHub with <Moment format={'YYYY'}>{this.props.user.created_at}</Moment>, {this.props.user.name} is a developer with <a href={this.props.user.html_url}> {this.props.user.public_repos} public repositories </a> and <a href={this.props.user.html_url}> {this.props.user.followers} followers. </a>  </h2>
                  </div>
               </div>
            </div>
            <div className='mainSite'>
               <div className='site'>
                  <h2>Website</h2>
                  <div className='blogDiv'>
                     <h2><a href={this.props.user.blog}> {this.props.user.blog} </a></h2>
                  </div>
               </div>
            </div>
            <div className='mainRepo'>
               <div className='repo'>
                  <h2>Popular Repositories</h2>
                  <div className='blogRepo'>
                  </div>
               </div>
            </div>
            <div className='mainOrg'>
               <div className='org'>
                  <h2>Organizations</h2>
                   <div className='blogOrg'>
                      {this.props.org.map((org, index) => {
                        return <h2 key={index}>{org.login}</h2>
                      })}
                     <h2>If you would like more information about this organization, please visit the organization page on GitHub. </h2>
                  </div>
               </div>
            </div>
            <div className='mainAbout'>
               <div className='about'>
                  <div>
                     <h2> About This <br /> Résumé </h2>
                  </div>
                  <div className='aboutDiv'>
                     <h2> This résumé is generated automatically using public information from the developers GitHub account. The repositories are ordered by popularity based on a very simple popularity heuristic that defines the popularity of a repository by its sum of watchers and forks. Do not hesitate to visit {this.props.user.name} GitHub page for a complete work history.  </h2>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}


const mapStateToProps = state => ({
   user: state.user.currentUser,
   org: state.org.currentOrgs,
   repo: state.repo.currentRepos
});

export default connect(mapStateToProps)(Resume)

