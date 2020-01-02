import React from 'react'
import img from './assets/img'
import Chart from 'chart.js'
import data from './assets/data'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      data_skills: [],
      data_work_history: [],
      projects: []
    }
  }
  componentDidMount () {
    this.setState(prevState => ({
      prevState,
      data_skills: data.skills,
      data_work_history: data.work_history,
      projects: data.projects
    }))
    let ctx = document.getElementById('chartGraph')
     new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [['TASK','MANAGEMENT'], ['LEARNING','ABILITY'], ['TEAM','PLAYER'],['POSITIVE','ATTITUDE'], ['ADAPT','ABILITY']],
          datasets: [{
              backgroundColor: "#56CCF2",
              borderColor: "#56CCF2",
              radius: 0,
              borderWidth: 0,
              pointRadius: 0,
              pointBorderWidth: 0,
              pointBackgroundColor: "orange",
              pointBorderColor: "#56CCF2",
              pointHoverRadius: 1,
              data: [80, 77, 95, 85,75]
          }]
        },
        options: {
          tooltips: {enabled: false},
          hover: {mode: null},
          elements: {
              point: {
                  radius: 0
              }
          },
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              display:false,
              maxTicksLimit: 1
            },
            pointLabels: {
              fontSize: 7,
              // fontColor: "#EB5757",
            },    
          },
          legend: {
            display: false
          },
          maintainAspectRatio: false
        }
    });
  }
  renderSkill (skill_name,value,icon,iconhover,index,color) {
    return (
      <div className="col-lg-4 col-sm-6 col-md-6 col-12 mt-1 skill-list" key={skill_name}>
        <div id={`sk-${index}`} className="row skill-name">{skill_name}</div>
        <div className="row skill-points-icon">
          <div className="col-1 pl-0 icon-container">
            <img src={icon} alt="" 
            onMouseOver={(event) => {
              event.target.src = iconhover
              document.getElementById(`sk-${index}`).style.display = 'block'
            }}
            onMouseOut={(event) => {
              event.target.src = icon
              document.getElementById(`sk-${index}`).style.display = 'none'
            }}/>
          </div>
          <div className="col skills-circles">
            <div className="circle" style={{background: value >= 1 ? color: ''}}>
              <div className="level-name novice">NOVICE</div>
            </div>
            <div className="circle"  style={{background: value >= 2 ? color: ''}}>
              <div className="level-name beginner">BEGINNER</div>
            </div>
            <div className="circle"  style={{background: value >= 3 ? color: ''}}>
              <div className="level-name competent">COMPETENT</div>
            </div>
            <div className="circle"  style={{background: value >= 4 ? color: ''}}>
              <div className="level-name proficient">PROFICIENT</div>
            </div>
            <div className="circle"  style={{background: value >= 5 ? color: ''}}>
            <div className="level-name expert">EXPERT</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderUrlSite (url) {
    return (
      <div>
        <a className="url-site" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </div>
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container resized-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="self-img">
                <img src={img.self} alt=""/>
              </div>
              <div className="contact-list mt-2">
                <label className="self-motto">"Don't just learn to code, Learn to create"</label>
                <ul>
                  <li><img src={img.mapMarker} alt=""/>Philippines</li>
                  <li><img src={img.emailIcon} alt=""/>dev.kimpusod@gmail.com</li>
                  <li><img src={img.globeIcon} alt=""/><a href="https://kimsean.github.io/">https://kimsean.github.io/</a></li>
                </ul>
              </div>
            </div>
            <div className="col summary-container">
              <h1>KIM SEAN PUSOD</h1>
              <h6>SOFTWARE ENGINEER</h6>
              <div className="summary-paragraph">
                <p>
                Innovative tech mind with five years of experience in developing modern applications. 
                </p>
                <p>
                A fully competent software developer with extensive experience in front end development methodologies as well as back end development proficiency.
                </p>
                <p>
                In my spare time, I enjoy creating useful projects to share with the developer community, dedicated to building and optimizing websites for better user experience.
                </p>
                <p>
                Constantly learning to become a better problem-solver who can provide the best solutions for any given task.
                </p>
              </div>
            </div>
          </div>
          <h6>EDUCATION</h6>
          <div className="education-container">
            <p className="pb-0 mb-0 course">Bachelor of Science in Information Technology</p>
            <p className="pb-0 mb-0 school">HOLY CROSS OF DAVAO COLLEGE</p>
            <p className="pb-0 mb-0 year">2014-2015</p>
          </div>
          <h6 className="mt-4">SKILLS</h6>
          <div className="row">
            <div className="col-lg-4">
              <canvas id="chartGraph"></canvas>
            </div>
            <div className="col">
              <div className="row">
              {
                this.state.data_skills.map((x, index) => {
                  return this.renderSkill(x.name,x.value,x.icon,x.iconHover,index,x.color)
                })
              }
              </div>
            </div>
          </div>
          <h6 className="mt-4">WORK HISTORY</h6>
          <div className="work-history-container">
            <ul>
              {
                this.state.data_work_history.map((data,index) => {
                  return(
                    <li key={index}>
                      <div className="work-arrow-left"></div>
                      <div className="work-arrow-right"></div>
                      <div className="job-year text-center">{data.year}</div>
                      <div className="company-container">
                        <div className="company-name">{data.name}</div>
                        <div className="job-description">{data.jobDescription}</div>
                        <div className="time">{data.time}</div>
                        <div className="arrow-bottom"></div>
                        <div className="arrow-bottom-2"></div>
                      </div>
                      <div className="job-points">
                        {
                          data.jobPoints.map((x, index) => {
                            return (
                              <div key={index}><b>* </b>{x.description}</div>
                            )
                          })
                        }
                        <div className="arrow-top"></div>
                        <div className="arrow-top-2"></div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <h6 className="mt-4">PROJECTS</h6>
          <div className="projects-container">
          {
            this.state.projects.map((val, index) => {
              return(
                <div className="media project-row" key={index}>
                  <img src={val.icon} className="mr-3 proj-main-logo" alt="..."/>
                  <div className="media-body">
                      <label><b>{val.name}</b>
                        <span className="project-type">{val.project_type}</span>
                        {
                          this.renderUrlSite(val.site_url)
                        }
                      </label>
                      <p className="project-description">
                      {val.description}
                      </p>
                      <div className="project-roles">
                        <ul>
                          {
                            val.roles.map((y,index) => {
                              return (
                                <li key={index}>{y}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="project-item-continer">
                        <div className="project-preview">
                        <img src={val.gif} alt=""/>
                        </div>
                        <button className="view-project"><img src={img.eyeIcon} alt=""/> Preview</button>
                      </div>
                    <ul className="project-tag-list">
                      {
                        val.tags.map((x, index2) => {
                          return(
                            <li className="project-tag-item" key={index2}>{x}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}